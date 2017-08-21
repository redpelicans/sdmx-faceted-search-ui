import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';
import { FormattedNumber, defineMessages, intlShape, injectIntl } from 'react-intl';

const DimensionFacet = ({ name, buckets, intl }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">{name}:</p>
    </div>
    {buckets.map(bucket => (
      <Checkbox
        key={bucket.val}
        className="dimension_checkbox"
      >
        <div className="facet">
          {intl.formatMessage(defineMessages({
            id: `${bucket.val.split(' ')[0]}.bucket`,
            defaultMessage: '{value}',
          }), { value: bucket.val })}
          <FormattedNumber value={bucket.count} />
        </div>
      </Checkbox>))}
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.object,
  buckets: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(DimensionFacet);
