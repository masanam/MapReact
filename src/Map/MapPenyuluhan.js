import React, { Component } from 'react';
import { MapContainer, TileLayer,LayersControl, LayerGroup } from 'react-leaflet';
// import { balais } from '../data/balais';
import { MarkerLayer } from '../layers/marker_layer';
import axios from 'axios';
import { ProvinceLayerLabel } from '../layers/province_layer_label';

class MapPenyuluhan extends Component{
    constructor(props){
        super(props);
        this.state = {
            balais : null,
            provinces : null,
            loading:true,
        }
        // this.props.balais = this.state.balais;
    }
    async componentDidMount()  {
        const options = {
            method:'get',
            url:'https://simlatluh.bigjek.id/api/geo/penyuluh/balai'
        };
        const response = await axios(options);
        const json = response.data;
        this.setState({balais:json});
        // console.log(json);
        const options2 = {
            method:'get',
            url:'https://simlatluh.bigjek.id/api/geo/penyuluh/provinces'
        };
        const response2 =await axios (options2);
        const json2 = response2.data;
        this.setState({provinces:json2,loading:false});
        console.log(json2);
    }
    render() {
        const { balais, loading, provinces } = this.state;
        if(loading) return <div>
            <h2>Sedang memuat data penyuluh...</h2>
        </div>;
        return (
            <MapContainer key="peta_indo" center={[-2.879704, 118.125595]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay checked name="Jumlah Penyuluh per Satuan Kerja">
                    <LayerGroup key={'group_1'}>
                    <MarkerLayer data={balais} />
                    </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Jumlah Penyuluh per Provinsi">
                        <LayerGroup>
                        <ProvinceLayerLabel data={provinces} label="Jumlah Penyuluh" />
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
                
            </MapContainer>
        );
    }
}
export default MapPenyuluhan;