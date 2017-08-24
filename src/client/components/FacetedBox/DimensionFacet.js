import React from 'react';
import { remove, indexOf } from 'ramda';
import PropTypes from 'prop-types';
import { Checkbox, Icon } from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';
import { onlyUpdateForKeys } from 'recompose';

const isChecked = (value, name) => value.includes(name);

const DimensionFacet = ({ name, value, buckets, onClick }) => (
  <div className="facetedbox dimension">
    <div className="dimensionbox_name_container">
      <Icon iconName="pt-icon-filter-list" className="icon_filter" />
      <p className="dimensionboxname">
        {<FormattedMessage id={`${name}.header`} defaultMessage="{name}" values={{ name }} />}
      </p>
    </div>
    {buckets.map(bucket => (
      <div className="checkbox_container" key={bucket.val}>
        <Checkbox
          onChange={() => isChecked(value, bucket.val) ? onClick(remove(indexOf(bucket.val, value), 1, value)) : onClick([...value, bucket.val])}
          className="dimension_checkbox"
          checked={isChecked(value, bucket.val)}
        >
          <div className="bucket_value">{bucket.val}</div>
          <div>({bucket.count})</div>
        </Checkbox>
      </div>
      ))
    }
  </div>
);

DimensionFacet.propTypes = {
  name: PropTypes.string.isRequired,
  buckets: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.array,
};

DimensionFacet.defaultProps = {
  value: [],
};

const enhance = onlyUpdateForKeys(['domain', 'value', 'name']) //eslint-disable-line
export default enhance(DimensionFacet);
