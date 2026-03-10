import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapView = ({ locations }) => {
  useEffect(() => {
    if (!locations || locations.length === 0) return;

    const mapContainer = document.getElementById("map-container");

if (mapContainer && mapContainer._leaflet_id) {
  mapContainer._leaflet_id = null;
}

    const map = L.map("map-container").setView(
      [locations[0].lat, locations[0].lng],
      12
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    locations.forEach((loc) => {
      if (!loc.lat || !loc.lng) return;

      const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.marker([loc.lat, loc.lng], { icon: customIcon })
  .addTo(map)
  .bindPopup(`<strong>${loc.label}</strong>`);
    });

    return () => map.remove();
  }, [locations]);

  if (!locations || locations.length === 0) {
    return (
      <div className="border border-gray-300 shadow rounded-xl p-4 text-gray-500">
        Search to view hospitals on map
      </div>
    );
  }

  return (
    <div className="sticky top-6 bg-white rounded-xl border border-gray-300 h-[500px]">
      
      <div className="h-full rounded-lg overflow-hidden">
        <div id="map-container" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MapView;
