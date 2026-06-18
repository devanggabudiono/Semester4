"use client";
import { useEffect, useState } from "react";

interface UmkmItem {
  id: number;
  slug: string;
  nama: string;
  kategori: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  markers?: UmkmItem[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  singleMode?: boolean;
}

export default function Map({ 
  markers = [], 
  center = [-8.1340, 112.5273],
  zoom = 15,
  height = "400px",
  singleMode = false
}: MapProps) {
  const [mounted, setMounted] = useState(false);
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    icon: any;
  } | null>(null);

  useEffect(() => {
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
    ]).then(([L, RL]) => {
      // Fix default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const icon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      setMapComponents({
        MapContainer: RL.MapContainer,
        TileLayer: RL.TileLayer,
        Marker: RL.Marker,
        Popup: RL.Popup,
        icon,
      });
      setMounted(true);
    });
  }, []);

  // Inject leaflet CSS once on mount
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }, []);

  if (!mounted || !MapComponents) {
    return (
      <div
        style={{ height }}
        className="bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-500 text-sm gap-2"
      >
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Memuat Peta...
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, icon } = MapComponents;

  return (
    <div
      style={{ height, position: "relative", zIndex: 0 }}
      className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200"
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((umkm) => (
          <Marker
            key={umkm.id}
            position={[umkm.latitude, umkm.longitude]}
            icon={icon}
          >
            <Popup>
              <div style={{ textAlign: "center", padding: "4px", minWidth: "120px" }}>
                <strong style={{ display: "block", marginBottom: "4px", fontSize: "13px" }}>
                  {umkm.nama}
                </strong>
                <span style={{ display: "block", color: "#666", fontSize: "11px", marginBottom: "8px" }}>
                  {umkm.kategori}
                </span>
                {!singleMode && (
                  <a
                    href={`/umkm/${umkm.slug}`}
                    style={{
                      display: "inline-block",
                      background: "#059669",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      textDecoration: "none",
                    }}
                  >
                    Lihat Detail
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
