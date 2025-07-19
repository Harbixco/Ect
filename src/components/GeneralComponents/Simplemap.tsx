
import GoogleMapReact, { Coords, GoogleMapReactProps } from 'google-map-react';

// Define the props for the marker component
interface MarkerProps {
  text: string;
}

// Marker component
const Marker: React.FC<MarkerProps> = ({ text }) => <div>{text}</div>;

// Define the default props and map component
const SimpleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Set the container height and width explicitly
    <div style={{ height: '50vh', width: '95%', margin: "auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
