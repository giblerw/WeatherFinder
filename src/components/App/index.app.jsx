import React, { Component } from 'react';
import Map from '../Map/index.map';
import NavbarHeader from '../Navbar/index.navbar';
import Card from 'react-bootstrap/Card';
import * as Config from '../../config';

import './style.app.scss';

class App extends Component {
    render() {
        return(
            <div className='app-container'>
            <NavbarHeader />
            <Card body className='bg-dark map-card'>
                <Map 
                    token={Config.accessToken}
                    latitude={Config.defaultLat}
                    longitude={Config.defaultLong}
                    zoom={Config.defaultZoom}
                    mapStyle={Config.defaultStyle}
                />
            </Card>
            </div>
        )
    };
};

export default App;