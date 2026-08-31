import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: './markerVeltora.webp',
  iconSize: [50,50],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

function ContactMap() {
  const position = [30.281763, 57.02269];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="md:col-span-2 h-56 rounded-xl overflow-hidden border border-[#2a2a2a]">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} icon={customIcon}>
            <Popup>دفتر مرکزی ولتورا</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="bg-[#1c1c1c] border text-center md:text-right justify-center border-[#2a2a2a] rounded-xl p-5">
        <h3 className="text-[#f2f2ee]  font-medium mb-3 text-xl  ">
          ســــاعـــات پاســـخــگویـــی
        </h3>
        <ul className="text-[#b5b3ac] text-md space-y-2">
          <li>شنبه تا چهارشنبه: 9 تا 21</li>
          <li>پنجشنبه: 9 تا 14</li>
          <li>جمعه: تعطیل</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMap;
