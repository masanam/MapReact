import React, { Component } from 'react';
import L from "leaflet";
import { MapContainer, TileLayer,LayersControl, LayerGroup } from 'react-leaflet';
import { MarkerLayer } from '../layers/marker_layer';
import { ProvinceLayerLabel } from '../layers/province_layer_label';

import axios from 'axios';

class MapPelatihan extends Component{
    constructor(props){
        super(props);
        this.state = {
            balais : null,
            provinces : null,
            loading:true,
            Dataisloaded:false,
        }
        // this.props.balais = this.state.balais;
    }
    addLegend = () => {
        const getColor = d => {
            return d > 1000
              ? "#800026"
              : d > 500
              ? "#BD0026"
              : d > 200
              ? "#E31A1C"
              : d > 100
              ? "#FC4E2A"
              : d > 50
              ? "#FD8D3C"
              : d > 20
              ? "#FEB24C"
              : d > 10
              ? "#FED976"
              : "#FFEDA0";
          };
        
        const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
        let labels = [];
        let from;
        let to;
        let i=0;
        return grades.map(item=>{
            i++;
            return <div>
                <i style={{ background:getColor(item) }}></i>
                {item} &ndash;{grades[i]}
            </div>;
        });  
        
      };
    async componentDidMount()  {
        
        const options = {
            method:'get',
            url:'https://simlatluh.bigjek.id/api/geo/pelatihan/balai'
        };
        const response = await axios(options);
        const json = response.data;
        this.setState({balais:json,loading:true});
        console.log(json);
        const options2 = {
            method:'get',
            url:'https://simlatluh.bigjek.id/api/geo/pelatihan/provinces'
        };
        const response2 =await axios (options2);
        const json2 = response2.data;
        this.setState({provinces:json2,Dataisloaded:true});
        console.log(json2);
        // this.setState({loading:false});
        
    }
    render() {
        const {Dataisloaded,provinces, balais} = this.state;
        if(!Dataisloaded) return <div>
            <h2>Sedang memuat data pelatihan...</h2>
        </div>;
        return (
            <MapContainer key="peta_indo" center={[-2.879704, 118.125595]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay checked name="Jumlah Pelatihan per Balai">
                    <LayerGroup key={'group_1'}>
                    <MarkerLayer data={balais}/>
                    </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Pelatihan per Provinsi">
                        <LayerGroup>
                        <ProvinceLayerLabel data={provinces} label="Jumlah Pelatihan"/>
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
                

            </MapContainer>
        );
    }
}
export default MapPelatihan;