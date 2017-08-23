import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Media from 'react-media';

import ResultPanel from '..';
import DataFlow from '../../DataFlow'

const { describe, it } = global;
const dataflows = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']

describe ('<ResultPanel />', () => {
    const wrapper = shallow(<ResultPanel
      displayShowPanel={() => {}}
      searchValue=""
      dataflows={dataflows}
    />);
  it('ResultPanel should render a resultpanel div', () => {
    should(wrapper.find('.resultpanel')).length(1);
  })
  it('ResultPanel should find <DataFlow /> elem', () => {
    should(wrapper.matchesElement(<DataFlow data={ [] } screenSize={true} />));
  })
  it('ResultPanel should find 9 <DataFlow />', () => {
    should(wrapper.find(Media).length).eql(dataflows.length);
  })
})
