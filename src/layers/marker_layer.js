import React from 'react';
import { Popup, Marker } from 'react-leaflet';
import { defaultIcon } from '../icons/defaultIcon';
import { Card } from 'antd';

const PopupStatistic = ({info}) =>{
  return (
    <Card title={info.name}
    style={{ fontSize:16,fontStyle:'bold' }}>
      
    <Card style={{ marginTop: 16,fontSize:12 }}
      type="inner"
      title={info.description}
      extra={<a href={info.url} target="_blank" rel="noreferrer">More</a>}>
      
    </Card>
    {info.jumlah!=null?<Card>Jumlah : {info.jumlah}</Card>:''}
    </Card>
  );
}
export const MarkerLayer = ({data})=>{
    // console.log(data);
    return data.features.map(feature => {
        const { coordinates } = feature.geometry;
        return (
            <Marker position={coordinates} icon={defaultIcon} key={String(coordinates)}>
              <Popup>
               <PopupStatistic info={feature.properties}/>
              </Popup>
            </Marker>
        );
    })
}