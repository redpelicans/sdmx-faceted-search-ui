import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { PopoverInteractionKind } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/labs';

import './DataFlow.css';

export const PopHoverElem = ({ data }) => (
  <div className="popover_container ">
    <div className="pophover_title_container">
      <div className="pt-icon-info-sign logo_info pt-intent-primary" />
      <p className="pophover_title">{data.name}</p>
    </div>
    <div className="text_container">
      <p className="title">Id: </p>
      <p>{data.id}</p>
    </div>
    <div className="text_container">
      <p className="title">Agency: </p>
      <p>{data.agency}</p>
    </div>
    <div className="text_container">
      <p className="title">Version: </p>
      <p>{data.version}</p>
    </div>
    <div className="text_container">
      <p className="title">Description: </p>
      <p>{data.description}</p>
    </div>
    {data.frequency && <div className="text_container">
      <p className="title">Frequency: </p>
      <div className="ref_area_container">
        {data.frequency && data.frequency.map(frequence => (
          <p key={frequence}>{frequence}\</p>
        ))}
      </div>
    </div>}
    {data.interest_rate_type && <div className="text_container">
      <p className="title">Interest rate type: </p>
      {data.interest_rate_type && data.interest_rate_type.map(type => (
        <p key={type}>{type}</p>
      ))}
    </div>}
    {data.reference_area && <div className="text_container">
      <p className="title">Reference area: </p>
      <div className="ref_area_container">
        {data.reference_area && data.reference_area.map(ref => (
          <p className="ref" key={ref}>{ref}\ </p>
        ))}
      </div>
    </div>}
  </div>
);

const DataFlow = ({ data, screenSize }) => (
  <div
    className={screenSize ?
      'pt-card pt-elevation-0 dataflowcontainer large' :
      'pt-card pt-elevation-0 dataflowcontainer small'
      }
  >
    <div className="dataflows_title">
      <p className="name">{data.name}</p>
      <Popover2
        content={
          <PopHoverElem data={data} />
        }
        target={
          <div className="info_container">
            <i className="fa fa-info" aria-hidden="true" />
          </div>
        }
        interactionKind={PopoverInteractionKind.CLICK}
        hoverCloseDelay={500}
        popoverClassName="popover"
      />
    </div>
    <p className="id">{data.id}</p>
  </div>
);

DataFlow.propTypes = {
  data: PropTypes.object.isRequired,
  screenSize: PropTypes.bool,
};

PopHoverElem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default onlyUpdateForKeys(['data', 'screenSize'])(DataFlow);
