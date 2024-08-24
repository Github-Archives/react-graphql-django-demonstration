// import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"

// import michiganCounties from "./data/michiganCounties.json" // Make sure to have this file

const MapComponent = () => {
  return (
    <MapContainer
      style={{ height: "600px", width: "100%" }}
      center={[44.3148, -85.6024]} // Center on Michigan
      zoom={6} // Set an appropriate zoom level
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add your counties here using GeoJSON or other components */}
    </MapContainer>
  )
}

export default MapComponent
