import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
<<<<<<< HEAD
=======

>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
import DataFlow from '..';

const { describe, it } = global;

<<<<<<< HEAD
describe ('<Container />', function () {
  const data = {
    id: 0,
    Name: 'VTT Tout Suspendu 26\'\' Bliss Noir Orange Freins à Disques 21 Vit TC 47 cm 532M',
    Prix: 1763.00,
    Image: 'http://www.cyclesduloir.com/media/g_vignette/118312',
    Categories: 'sport',
    Type: [
      'Vélo tout terrain',
      'Vélo pliable',
    ],
    Marque: 'SCOTT',
    Vente: 'enchère',
  }
  it('DataFlow should render a dataflowcontainer', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.dataflowcontainer')).length(1);
  })
  it('DataFlow should render an imagecontainer', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.imagecontainer')).length(1);
  })
  it('DataFlow should render an image', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.image')).length(1);
  })
  it('DataFlow should render a dataflowinfo', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.dataflowinfo')).length(1);
  })
  it('DataFlow should render a dataflowname', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.dataflowname')).length(1);
  })
  it('DataFlow should render a price', function () {
    const wrapper = shallow(<DataFlow
      data={data}
      direction="column"
    />);
    should(wrapper.find('.price')).length(1);
  })
})
=======
describe('Tests DataFlow component', function() {
    const root = <DataFlow result='onsenfou' />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
    it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children.props;
        should(nbItems(wrapper)).eql(1);
    });
    it('Should be a string prop', function() {
        const wrapper = shallow(root).props().children.props.children;
        should(typeof(wrapper) === typeof('string')).eql(true);
    });
});
>>>>>>> 90f809d7875700e59c659a9be270a13db607ee4b
