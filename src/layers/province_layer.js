import { Card } from 'antd';
import React from 'react';
import {Polygon, Tooltip } from 'react-leaflet';

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}
export const ProvinceLayer = ({data, label})=> {
    const purpleOptions = { color: 'purple',
        fillColor:'blue',
        strokeWidth:2 };
    
    return data.features.map(feature => {
        const { coordinates } = feature.geometry;
        // console.log(properties);
        return (<Polygon color={'purple'} positions={coordinates} 
        pathOptions={purpleOptions} key={String(coordinates)}>
            <Tooltip direction="top" opacity={0.8}>
                <Card>
                    {feature.properties.name}
                </Card>
            </Tooltip>
        </Polygon>);
    });
}