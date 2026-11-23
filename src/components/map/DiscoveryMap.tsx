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
        {/* The local world tile stays beneath the detailed tiles at every zoom. */}
        <TileLayer
          url="/maps/world-overview.svg"
          attribution='Map data: <a href="https://www.naturalearthdata.com/">Natural Earth</a>'
          minNativeZoom={0}
          maxNativeZoom={0}
          maxZoom={19}
          zIndex={1}
        />
        <TileLayer
          minZoom={4}
          maxZoom={19}
          zIndex={2}
          className="discovery-detail-tiles"
          errorTileUrl={L.Util.emptyImageUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p) => (
          <Marker key={p.slug} title={p.title} alt={p.title} position={[p.lat, p.lng]} icon={markerIcon(p.color)}>
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
