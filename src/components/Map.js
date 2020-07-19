import React,{Component} from "react"

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle={
    width:"90%",
    height:"400px"
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                style={containerStyle}
                google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAcAyF9uvsRzXmijU39aVTlBIIV-lS2RjE")
})(MapContainer)
