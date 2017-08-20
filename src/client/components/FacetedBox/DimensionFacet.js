import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';

const DimensionFacet = ({ name, buckets }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">{name}:</p>
    </div>
    {buckets.map(bucket => <Checkbox key={bucket.val} className="dimension_checkbox">{bucket.val}({bucket.count})</Checkbox>)}
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
  buckets: PropTypes.array.isRequired,
};

export default DimensionFacet;
