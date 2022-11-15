import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { defaultIcon } from '../icons/defaultIcon';


export const MarkerLayerWithTooltip = ({data})=>{
    
    return data.features.map(feature => {
        const { coordinates } = feature.geometry;
        return (
            <Marker position={coordinates} icon={defaultIcon}
            key={`marker_${feature.properties.id}`}>
                <Popup>
                    <h2>{feature.properties.name}</h2>
                    <p>{feature.properties.description}</p>
                </Popup>
              <Tooltip>
               {feature.properties.name}
              </Tooltip>
            </Marker>
        );
    })
}