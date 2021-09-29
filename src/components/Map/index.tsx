import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = [51.505, -0.09]

const Map = () => (
  <MapContainer
    center={position}
    zoom={3}
    scrollWheelZoom={true}
    style={{
      height: '100%',
      width: '100%'
    }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

export default Map
