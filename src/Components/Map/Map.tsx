import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLayoutEffect, useRef, useState } from "react";
import L from "leaflet";
import "./map.css";
import location from "../../assets/location-pin.png";

interface weatherProps {
  isWeather: any | null;
}

const Map = ({ isWeather }: weatherProps) => {
  const [position, setPosition] = useState<LatLngExpression>([11.35, 77.73]);

  useLayoutEffect(() => {
    if (isWeather?.coord?.lat && isWeather?.coord?.lon) {
      setPosition([isWeather.coord.lat, isWeather.coord.lon]);
    }
  }, [isWeather]);

  const mapRef = useRef(null);

  const SetView = () => {
    const map = useMap();

    if (isWeather?.coord?.lat && isWeather?.coord?.lon) {
      map.setView(
        L.latLng(isWeather.coord.lat, isWeather.coord.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
    return null;
  };

  const customIcon = new Icon({ iconUrl: location, iconSize: [40, 40] });

  return (
    <div className="w-[300px] overflow-hidden rounded-2xl xl:w-[500px] lg:w-[400px] md:w-[300px]">
      <MapContainer
        center={position}
        zoom={13}
        className="h-[280px] w-full"
        ref={mapRef}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?key=Let1ACLCDzRnFeDw5VVS" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="px-4 py-1 rounded-lg bg-black">
              <p className="text-white font-semibold">{isWeather?.name}</p>
            </div>
          </Popup>
        </Marker>

        <SetView />
      </MapContainer>
    </div>
  );
};

export default Map;
