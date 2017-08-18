import { compose, toLower, prop, sortBy, init, join, reduce, addIndex, last } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Classes, Tree } from '@blueprintjs/core';
import { onlyUpdateForKeys } from 'recompose';

const reduceIndexed = addIndex(reduce);

const CatTreeNode = (id, label, defaultValue) => ({
  id,
  label,
  childNodes: [],
  isSelected: defaultValue === id,
  hasChildNodes() { return this.childNodes.length; },
  get hasCaret() { return this.hasChildNodes(); },
  get iconName() { return this.hasChildNodes() ? 'folder-close' : 'pt-icon-tag'; },
  get secondaryLabel() { return `(${this.totalCount} / ${this.count})`; },

  spreadExpanded() {
    this.isExpanded = true;
    const parent = this.parent;
    if (parent) parent.spreadExpanded();
  },

  spreadBottomUp(cb) {
    cb(this);
    if (this.parent) this.parent.spreadBottomUp(cb);
  },

  setCount(count) {
    this.count = count;
    if (count) {
      this.spreadBottomUp(node => {
        node.totalCount = (node.totalCount || 0) + count;
      });
    }
  },

  addChild(child) {
    this.childNodes.push(child);
    child.parent = this;
    if (child.isSelected) this.spreadBottomUp(node => node.isExpanded = true);
    return child;
  },
});

const CatTree = (domain, value) => {
  const nodes = {};
  const roots = [];
  const getNode = id => nodes[id];
  const makeNode = (id, label) => new CatTreeNode(id, label, value);
  const addNode = (parent, { id, level, label }) => {
    let node = getNode(id);
    if (node) return node;
    node = makeNode(id, label);
    nodes[id] = node;
    if (level === 0) roots.push(node);
    else parent.addChild(node);
    return node;
  };
  const makePath = (lastPath = {}, label, idx) => {
    const path = join('/', [lastPath.path, label]);
    return {
      id: `${idx}${path}/`,
      path,
      level: idx,
      label,
    };
  };
  const getPath = val => {
    const [level, ...names] = init(val.split('/')); // eslint-disable-line no-unused-vars
    return reduceIndexed((acc, name, idx) => [...acc, makePath(last(acc), name, idx)], [], names);
  };
  const setCount = (id, count) => {
    const node = getNode(id);
    if (!node) return;
    node.setCount(count);
  };
  const sortByLabel = sortBy(compose(toLower, prop('label')));
  const sort = nodes => {
    if (!nodes) return;
    const newNodes = sortByLabel(nodes);
    for (const node of newNodes) {
      node.childNodes = sort(node.childNodes);
    }
    return newNodes;
  };
  const getUINodes = () => sort(roots);
  const buildTree = () => {
    domain.forEach(({ val, count }) => {
      const cats = getPath(val);
      let parent;
      cats.forEach(cat => {
        parent = addNode(parent, cat);
      });
      setCount(val, count);
    });
  };
  buildTree();
  return { getUINodes };
};

class TreeFacet extends React.Component {
  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
    this.forceUpdate();
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
    this.forceUpdate();
  };

  handleNodeClick = nodeData => {
    const { nodes } = this.state;
    const { onClick, name } = this.props;
    if (nodeData.isSelected) return;
    this.forEachNode(n => n.isSelected = false, nodes);
    nodeData.isSelected = true;
    this.forceUpdate();
    onClick && onClick({ facets: { [name]: nodeData.id } });
  }

  forEachNode = (cb, nodes) => {
    if (!nodes) return;
    for (const node of nodes) {
      cb(node);
      this.forEachNode(cb, node.childNodes);
    }
  };

  componentWillMount() {
    const { domain, value } = this.props;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  componentWillReceiveProps(nextProps) {
    const { domain, value } = this.props;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    return (
      <Tree
        contents={nodes}
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        onNodeClick={this.handleNodeClick}
        className={Classes.ELEVATION_0}
      />
    );
  }
}

TreeFacet.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const CategoryFacet = ({ name, domain, value, onClick }) => (
  <div>
    <span>{name}</span>
    <TreeFacet name={name} domain={domain} value={value} onClick={onClick} />
  </div>
  );

CategoryFacet.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const enhance = onlyUpdateForKeys(['domain', 'value', 'name']);
export default enhance(CategoryFacet);

