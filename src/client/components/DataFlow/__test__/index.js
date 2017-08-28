import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import DataFlow from '..';
import { PopoverInteractionKind } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/labs';

const { describe, it } = global;

describe ('<Container />', () => {
  const data =
    {
      id: "ERGONOMIC COTTON COMPUTER-195",
      agency: "SAS",
      version: "6.9.0",
      name: "back-end Intelligent Ergonomic Concrete Pizza (EN)",
      description: "Ut non tempora adipisci et ducimus et doloribus. (EN)",
      frequency: [
      "Monthly (M)",
      "Yearly (Y)"
      ],
      reference_area: [
      "Senegal (SB)",
      "Canada (NZ)",
      "Romania (SA)",
      "Western Sahara (SS)",
      "French Guiana (AS)",
      "Jamaica (MH)",
      "Saint Barthelemy (CI)"
      ],
      interest_rate_type: [
      "Bank interest rates (B)",
      "Money market interest rates (M)"
      ],
      score: 0.0004996253
    };
  const wrapper = shallow(<DataFlow
    data={data}
  />);
  it('DataFlow should render a dataflowcontainer', () => {
   should(wrapper.find('.dataflowcontainer')).length(1);
  })
  it('DataFlow should render a dataflows_title', () => {
    should(wrapper.find('.dataflows_title')).length(1);
  })
  it('DataFlow should render a name', () => {
    should(wrapper.find('.name')).length(1);
  })
  it('DataFlow should render a Popover2', () => {
    should(wrapper.find(Popover2)).length(1);
  })
  it('DataFlow should render a id div', () => {
    should(wrapper.find('.id')).length(1);
  })
})
