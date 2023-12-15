import React from "react";
import { useMemo } from "react";
import { createClient } from "contentful";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
export default function Map({ property }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <MapComponent property={property} />;
}

function MapComponent({ property }) {
  const marDelPlataCoords = { lat: -38.0049, lng: -57.5575 };

  const markerPosition =
    property?.lat && property?.lng
      ? { lat: parseFloat(property.lat), lng: parseFloat(property.lng) }
      : marDelPlataCoords;

  console.log(property.lat, property.lng, markerPosition);

  return (
    <GoogleMap
      zoom={14}
      center={markerPosition}
      mapContainerClassName="map-container"
    >
      {property?.lat && property?.lng && (
        <Marker
          position={{
            lat: parseFloat(property.lat),
            lng: parseFloat(property.lng),
          }}
        />
      )}
    </GoogleMap>
  );
}
