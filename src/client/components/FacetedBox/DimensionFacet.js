import React from 'react';
import { remove, indexOf } from 'ramda';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';

const isChecked = (value, name) => value.includes(name);


const DimensionFacet = ({ name, value, buckets, onClick }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">{name}:</p>
    </div>
    {buckets.map(bucket => (
      <Checkbox
        onChange={() => isChecked(value, bucket.val) ? onClick(remove(indexOf(bucket.val, value), 1, value)) : onClick([...value, bucket.val])}
        key={bucket.val}
        className="dimension_checkbox"
        checked={isChecked(value, bucket.val)}
      >
        <div>{bucket.val}</div>
        <div>({bucket.count})</div>
      </Checkbox>
      ))
    }
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
  buckets: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};

export default DimensionFacet;
