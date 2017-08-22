import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';
import { FormattedMessage, FormattedNumber } from 'react-intl';

const DimensionFacet = ({ name, buckets }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">
        {<FormattedMessage id={`${name}.header`} defaultMessage="{name}" values={{ name }} />}:
      </p>
    </div>
    {buckets.map(bucket => (
      <Checkbox
        key={bucket.val}
        className="dimension_checkbox"
      >
        <div className="facet">
          {bucket.val}
          <FormattedNumber value={bucket.count} />
        </div>
      </Checkbox>))}
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
  buckets: PropTypes.array.isRequired,
};

export default DimensionFacet;
