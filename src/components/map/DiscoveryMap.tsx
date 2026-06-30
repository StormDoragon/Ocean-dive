"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { MapPoint } from "./types";

function markerIcon(color: string) {
  return L.divIcon({
    className: "bs-marker",
    html: `<span style="
      display:block;width:16px;height:16px;border-radius:9999px;
      background:${color};border:2px solid #03040a;
      box-shadow:0 0 0 2px ${color}66, 0 0 12px ${color};
    "></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8],
  });
}

export default function DiscoveryMap({
  points,
  center = [20, 0],
  zoom = 2,
  className = "h-[420px]",
}: {
  points: MapPoint[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}) {
  return (
    <div className={`${className} overflow-hidden rounded-xl border border-white/10`}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        worldCopyJump
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {points.map((p) => (
          <Marker key={p.slug} position={[p.lat, p.lng]} icon={markerIcon(p.color)}>
            <Popup>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontSize: 11, opacity: 0.7 }}>
                  {p.categoryEmoji} {p.categoryName} · {p.year}
                </div>
                <a
                  href={`/discoveries/${p.slug}`}
                  style={{ fontWeight: 600, fontSize: 14, display: "block", marginTop: 2 }}
                >
                  {p.title}
                </a>
                {p.depthMeters != null ? (
                  <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
                    Depth: {p.depthMeters.toLocaleString()} m
                  </div>
                ) : null}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
