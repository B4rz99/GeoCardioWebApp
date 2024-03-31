import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Box from '@mui/material/Box';
import Calendar from '../elements/calendar.js'
import Selector from '../elements/selector.js'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export default function location() {
  return (
    <div>
    <Box
      display='flex'
      justifyContent='flex-start'
      marginY={8}
      marginX={13}
      gap={2}
    >
    <MapContainer style={{ height: "440px", width:'50%'}} center={[10.96854, -74.78132]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={[10.96854, -74.78132]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
    </MapContainer>

    <Calendar />
    <Box
      marginY
    >
      <Selector />
    </Box>
    </Box>
    </div>
  );
}