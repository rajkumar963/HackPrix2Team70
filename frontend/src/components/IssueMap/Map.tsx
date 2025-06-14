import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Issue {
  id: number;
  title: string;
  location: string;
  lat: number;
  lng: number;
  status: string;
  type: string;
}

interface MapProps {
  issues: Issue[];
  centerOn?: [number, number];
}

const typeColorMap: { [key: string]: string } = {
  'streetlight': '#f59e0b', // bg-yellow-500
  'garbage': '#ef4444',     // bg-red-500
  'road': '#6b7280',        // bg-gray-500
  'water': '#3b82f6',       // bg-blue-500
  'traffic': '#22c55e',      // bg-green-500
};

// A component to automatically adjust map view
const MapViewUpdater: React.FC<{ issues: Issue[]; centerOn?: [number, number] }> = ({ issues, centerOn }) => {
  const map = useMap();
  React.useEffect(() => {
    // Prioritize centering on a specific location if provided
    if (centerOn) {
      map.flyTo(centerOn, 14, {
        animate: true,
        duration: 1.5
      });
    } else if (issues.length > 0) {
      const bounds = L.latLngBounds(issues.map(issue => [issue.lat, issue.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [issues, centerOn, map]);
  return null;
};

const createCustomIcon = (issueType: string) => {
  const color = typeColorMap[issueType] || '#4b5563';
  return L.divIcon({
    html: `<span style="background-color: ${color}; width: 15px; height: 15px; border-radius: 50%; display: block; border: 2px solid white; box-shadow: 0 0 0 2px rgba(0,0,0,0.1);"></span>`,
    className: 'bg-transparent border-none', // leaflet adds a default background, we don't want it
    iconSize: [15, 15],
    iconAnchor: [7.5, 7.5],
  });
};

const Map: React.FC<MapProps> = ({ issues, centerOn }) => {
  return (
    <div className="bg-slate-100 rounded-lg h-[500px] w-full border">
      <MapContainer
        center={[28.5355, 77.3910]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {issues.map(issue => (
          <Marker
            key={issue.id}
            position={[issue.lat, issue.lng]}
            icon={createCustomIcon(issue.type)}
          >
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold text-base">{issue.title}</h3>
                <p className="text-sm">{issue.location}</p>
                <p className="capitalize text-sm">Status: {issue.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapViewUpdater issues={issues} centerOn={centerOn} />
      </MapContainer>
    </div>
  );
};

export default Map;
