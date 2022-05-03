import React, {Component} from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class Location extends Component {

    constructor(props) {
        super(props);

        this.setMarkers = this.setMarkers.bind(this);

        this.state = {
            locations: [],
        };

    }


    componentDidMount() {
        const ridersMap = L.map('leaflet-map').setView([40.02, -105.26], 12);


        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoibm9yYW5hc3N5IiwiYSI6ImNqenRndW1uZjA1OWwzZHBjcDhjdjlhMXcifQ.6cM8H-861lH6ubZeFaIDUw'
        }).addTo(ridersMap);

        const API_URL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

        const axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {'Content-Type': 'application/json'}
        });

        axiosInstance.get('/locations')
            .then(res => {
                this.setState({locations: res.data});
            }).then(() => {
            this.setMarkers(ridersMap);
        })
            .catch(err => console.error(err));

    }


    setMarkers(amap) {
        let markers = Array(this.state.locations.length);

        this.state.locations.forEach(location => {
            markers[location.riderID] = L.marker([location.latitude, location.longitude])
                .addTo(amap)
                .bindPopup(`${location.riderID}: ${location.lastName}`)
                .openPopup();
        });


    }

    render() {
        return (
            <div>
                <div className="jumbotron bg-secondary text-white ">
                    <h2 className="display-4">Realtime riders' location</h2>
                    <hr/>
                    <p className="lead font-weight-bold">Follow our riders in real-time location on our interactive map.
                    </p>
                    <hr className="my-1"/>
                    <p className='lead font-weight-bold'>
                        Click on a marker to display the name of the contestant.
                    </p>
                </div>

                <div className='bg-secondary' id='leaflet-map' style={{height: '640px'}}></div>
            </div>


        );
    }
}
