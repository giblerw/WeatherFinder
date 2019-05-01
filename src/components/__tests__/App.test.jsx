import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from "../App/index.app";
import Map from '../Map/index.map';
import Navbar from '../Navbar/index.navbar';
import Popup from '../Popup/index.popup';

let wrapped;

beforeEach(() => {wrapped = shallow(<App />);});

describe('Components render correctly', () => {

  it('Renders a Map', () => {
      expect(wrapped.find(Map).length).toEqual(1);
  });

  it('Renders a Navbar', () => {
      expect(wrapped.find(Navbar).length).toEqual(1);
  });

})
