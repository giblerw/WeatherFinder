import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import { popUP } from '../Popup/index.popup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../../redux/actions';

import './style.map.scss';

class Map extends Component {

    onClick = (e) => {
        let {lat, lng} = e.lngLat;
        this.setState({
            latitude: lat,
            longitude: lng,
            lngLat: e.lngLat
        });
        this.props.getWeather(this.state.latitude, this.state.longitude);
    };

    componentDidMount = () => {
        const {
            token,
            latitude,
            longitude,
            zoom,
            mapStyle,
        } = this.props;

        mapboxgl.accessToken = token;
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            center: [longitude, latitude],
            zoom,
            style: `mapbox://styles/mapbox/${ mapStyle }`
        });

        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.on('click', this.onClick);
    };

    componentWillReceiveProps = (nextProps) => {
        new mapboxgl.Popup().setLngLat(this.state.lngLat).setHTML(popUP(nextProps.locationData)).addTo(this.map);
    }

    render() {
        return(
            <div ref={el => this.mapContainer = el} className='absolute top right left bottom'/>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        locationData: state.locationData,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getWeather}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);