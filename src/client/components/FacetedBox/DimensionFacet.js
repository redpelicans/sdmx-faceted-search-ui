import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';

const DimensionFacet = ({ name, buckets, onClick }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">{name}:</p>
    </div>
    {buckets.map(bucket => (
      <Checkbox
        onChange={() => onClick(bucket.val)}
        key={bucket.val}
        className="dimension_checkbox"
      >
        {bucket.val}({bucket.count})
      </Checkbox>
      ))
    }
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
  buckets: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DimensionFacet;
