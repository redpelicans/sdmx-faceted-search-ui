import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';

const DimensionFacet = ({ name, buckets, handleClick }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">
        {<FormattedMessage id={`${name}.header`} defaultMessage="{name}" values={{ name }} />}:
      </p>
    </div>
    {buckets.map(bucket => (
      <Checkbox
        onChange={handleClick(bucket.val)}
        key={bucket.val}
        className="dimension_checkbox"
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
  handleClick: PropTypes.func.isRequired,
};

export default DimensionFacet;
