import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

//Setup for testing the app

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

configure({adapter: new Adapter()});
