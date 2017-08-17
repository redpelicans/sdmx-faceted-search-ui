import React from 'react';
import FilterBox from '..';
import Filtre from '../Filtre';
import { shallow } from 'enzyme';

const { describe, it } = global;

describe ('<FilterBox />', () => {
  const wrapper = shallow(<FilterBox
    name="test"
    filters={[
      {
        id: 0,
        name: 'Vélo BMX',
      },
      {
        id: 1,
        name: 'Vélo de route',
      },
      {
        id: 2,
        name: 'Vélo électrique',
      },
      {
        id: 3,
        name: 'Vélo pliable',
      },
      {
        id: 4,
        name: 'Vélo tout terrain',
      },
      {
        id: 5,
        name: 'All',
      }
    ]}
    filter={() => {}}
  />)
  it('FilterBox should render a filterbox div', () => {
    expect(wrapper.find('.filterbox')).toHaveLength(1);
  })
  it('FilterBox should render a filterboxname div', () => {
    expect(wrapper.find('.filterboxname')).toHaveLength(1);
  })
  it('FilterBox should render 6 Filter', () => {
    expect(wrapper.find(Filtre)).toHaveLength(6);
  })
  it('FilterBox should render 3 Filter', () => {
    const wrapper = shallow(<FilterBox
      name="test"
      filters={[
        {
          id: 0,
          name: 'Vélo BMX',
        },
        {
          id: 1,
          name: 'Vélo de route',
        },
        {
          id: 2,
          name: 'Vélo électrique',
        }
      ]}
    />)
    expect(wrapper.find(Filtre)).toHaveLength(3);
  })
})
