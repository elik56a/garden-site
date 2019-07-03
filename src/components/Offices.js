import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50vh',
    margin: ' 3rem 0 0 0 ',
    border: '2px solid #fff',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.411)'

};

export class Offices extends Component {
    state = {
        markers: [
            {
                id: 1,
                lat: 31.769040,
                lng: 35.216330
            },
            {
                id: 2,
                lat: 32.095172,
                lng: 34.821911
            },
            {
                id: 3,
                lat: 31.895253,
                lng: 34.810562
            },
            {
                id: 4,
                lat: 31.810877,
                lng: 34.651931
            }
        ]
    };

    render() {
        const markers =
            this.state.markers.map(marker => {
                return (

                    <Marker key={marker.id}
                        position={marker} />
                )
            })
        return (
            <div className='offices-container'>
                <h1 className="offices-title">רשימת סניפים </h1>
                <hr className='title-hr'></hr>
                <div className='map'>
                    <Map
                        google={this.props.google} zoom={8}
                        style={mapStyles}
                        initialCenter={{
                            lat: 31.769040,
                            lng: 35.216330
                        }}>
                        {markers}

                    </Map>
                </div>
                <div className="offices-list">
                    סניף ראשי:
            ירושלים, הנביאים 31 (בנין ארלדן)
                    <br />
                    טלפון : 02-5665170
                        <br />
                    <br />
                    בני ברק, בן גוריון 1 (בית בסר 2)
                    <br />
                    טלפון : 073-555-555
                    <br />
                    <br />
                    רחובות
                    <br />
                    טלפון : 08-9353586
                    <br />
                    <br />
                    אשדוד, הרצל 1 (בנין יוניטרייד)
                    <br />
                    טלפון : 08-8660206
                    <br />
                    <br />
                </div>


            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCx2QwtEJcyGyEeeoVClqa1s4s2Ae4g_Hk')
})(Offices)
