import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: -22.9023394,
  lng: -43.1174249
};

export default function Maps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCVejk-1lvqRmkUgSrFJLf6yzqCIvVvPDk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        clickableIcons={false}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}