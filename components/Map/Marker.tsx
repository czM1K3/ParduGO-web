import Image from 'next/image';
import ConstructionIcon from '@images/construction.svg';
import { Marker as MapGLMarker } from 'react-map-gl';

const Marker = ({
  latitude,
  longitude,
  onClick,
}: {
  latitude: number;
  longitude: number;
  onClick?: () => void;
}) => {
  return (
    <MapGLMarker latitude={latitude} longitude={longitude}>
      <div
        onClick={onClick}
        className="-translate-y-1/2 -translate-x-1/2 cursor-pointer"
      >
        <Image
          src={ConstructionIcon}
          width={60}
          height={60}
          className="rounded-full object-cover"
          alt="Picture on map"
        />
      </div>
    </MapGLMarker>
  );
};

export default Marker;
