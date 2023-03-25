import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJDOC4xNCwyLDUsNS4xNCw5LDVMOSwzNmMwLDQuMTQtMy45NSw4LjA0LTguMDQsOC4wNEw5LDguNjlMOSw5Yy00LjE0LDAtNS4yLDEuNDEtNS4xNCw5LjI1UzE5LDUuMTQsMTUsMTIsMTJaIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export default function MapDisplay(props: any) {
  const posicoes = props.posicoes;
  const color = props.color || "magenta";
  const markerIconColor = L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="${color}" d="M12,2C8.14,2,5,5.14,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.14,15.86,2,12,2z M12,12c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,12,12,12z"/>
      </svg>
    `).replace(/\s+/g, "")}`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <MapContainer
    center={posicoes[0]}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: "500px" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {posicoes.map((posicao: L.LatLngExpression, index: React.Key | null | undefined) => (
      <Marker key={index} position={posicao} icon={markerIconColor}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    ))}
  </MapContainer>
  );
}