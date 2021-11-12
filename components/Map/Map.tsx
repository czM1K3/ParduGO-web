import { GetAllEventsQuery } from 'lib/graphql/index.graphql';
import { useState } from 'react';
import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl';
import Marker from './Marker';

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
};

type MapProps = {
  data: GetAllEventsQuery;
}

const Map: React.FC<MapProps> = ({ data }) => {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: 50.034309,
    longitude: 15.781199,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/kahy9/ckvw9wfkq4q8914qnrr8ttdg0"
    >
      <GeolocateControl
        style={{
          bottom: 186,
          right: 0,
          padding: '10px',
        }}
        positionOptions={{ enableHighAccuracy: true }}
      />
      {data.getAllEvents.map((event) => (
        <Marker 
          key={event.id}
          latitude={event.latitude}
          longitude={event.longitude}
        />
      ))}
      <NavigationControl
        style={{
          bottom: 240,
          right: 0,
          padding: '10px',
        }}
        showCompass={false}
      />
    </ReactMapGL>
  );
};

export default Map;
