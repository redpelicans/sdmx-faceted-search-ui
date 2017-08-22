import { compose, toLower, prop, sortBy, init, join, reduce, addIndex, last } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Classes, Tree } from '@blueprintjs/core';
import { onlyUpdateForKeys } from 'recompose';
import './FacetedBox.css';

const reduceIndexed = addIndex(reduce);

const CatTreeNode = (id, label, defaultValue) => ({
  id,
  label,
  childNodes: [],
  isSelected: defaultValue === id,
  hasChildNodes() { return this.childNodes.length; },
  get hasCaret() { return this.hasChildNodes(); },
  get iconName() { return this.hasChildNodes() ? 'folder-close icon' : 'pt-icon-tag icon'; },
  get secondaryLabel() { return `(${this.count})`; },

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
    // if (count) this.spreadBottomUp(node => node.totalCount = (node.totalCount || 0) + count); //eslint-disable-line
  },

  addChild(child) {
    this.childNodes.push(child);
    child.parent = this; //eslint-disable-line
    if (child.isSelected) this.spreadBottomUp(node => node.isExpanded = true); //eslint-disable-line
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
  const sort = nodes => { //eslint-disable-line
    if (!nodes) return;
    const newNodes = sortByLabel(nodes);
    for(const node of newNodes) { //eslint-disable-line
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
  handleNodeCollapse = nodeData => { //eslint-disable-line
    nodeData.isExpanded = false; //eslint-disable-line
    this.forceUpdate();
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true; //eslint-disable-line
    this.forceUpdate();
  };

  handleNodeClick = nodeData => {
    const { nodes } = this.state;
    const { onClick } = this.props;
    if (nodeData.isSelected) return;
    this.forEachNode(n => n.isSelected = false, nodes); // eslint-disable-line
    nodeData.isSelected = true; //eslint-disable-line
    this.forceUpdate();
    onClick && onClick([nodeData.id]); // eslint-disable-line no-unused-expressions
  }

  forEachNode = (cb, nodes) => {
    if (!nodes) return //eslint-disable-line
    for (const node of nodes) { //eslint-disable-line
      cb(node);
      this.forEachNode(cb, node.childNodes);
    }
  };

  componentWillMount() {
    const { domain, value } = this.props;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  componentWillReceiveProps(nextProps) { //eslint-disable-line
    const { domain, value } = this.props;
    const nodes = CatTree(domain, value).getUINodes();
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    return (
      <Tree //eslint-disable-line
        contents={ nodes } //eslint-disable-line
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        onNodeClick={this.handleNodeClick}
        className={Classes.ELEVATION_0}
      />
    );
  }
}; //eslint-disable-line

TreeFacet.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

const CategoryFacet = ({ name, domain, value, onClick }) => { // eslint-disable-line arrow-body-style
  return (
    <div className="facetedbox">
      <p className="facetedboxname">{name}</p>
      <TreeFacet domain={domain} value={value} onClick={onClick} />
    </div>
  );
};

CategoryFacet.propTypes = {
  domain: PropTypes.array.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const enhance = onlyUpdateForKeys(['domain', 'value', 'name']) //eslint-disable-line
export default enhance(CategoryFacet);

