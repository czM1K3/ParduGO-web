import Image from 'next/image';
import Link from 'next/link';
import HelpUs from '../../public/markers/marker-helpus.svg';
import Ad from '../../public/markers/marker-ad.svg';
import Concert from '../../public/markers/marker-concert.svg';
import Health from '../../public/markers/marker-health.svg';
import Film from '../../public/markers/marker-film.svg';
import Policy from '../../public/markers/marker-policy.svg';
import Sport from '../../public/markers/marker-sport.svg';
import Theatre from '../../public/markers/marker-theatre.svg';
import Sound from '../../public/markers/marker-sound.svg';
import Event from '../../public/markers/marker-event.svg';
import Other from '../../public/markers/marker-other.svg';
import { Marker as MapGLMarker } from 'react-map-gl';

const Marker = ({
  latitude,
  longitude,
  category,
  id,
  onClick,
}: {
  latitude: number;
  longitude: number;
  category: string;
  id: string;
  onClick?: () => void;
}) => {
  const getMarker = (category: string) => {
    switch (category) {
      case 'Pomozte nám':
        return HelpUs;
      case 'Reklama':
        return Ad;
      case 'Koncert':
        return Concert;
      case 'Zdraví':
        return Health;
      case 'Film':
        return Film;
      case 'Politika':
        return Policy;
      case 'Sport':
        return Sport;
      case 'Divadlo':
        return Theatre;
      case 'Hudba':
        return Sound;
      case 'Akce':
        return Event;
      default:
        return Other;
    }
  };

  const getUrl = (id: string) => {
    return `/akce/${id}`;
  };

  return (
    <MapGLMarker latitude={latitude} longitude={longitude}>
      <div
        onClick={onClick}
        className="-translate-y-1/2 -translate-x-1/2 cursor-pointer"
      >
        <Link href={getUrl(id)} passHref>
          <a>
            <Image
              src={getMarker(category)}
              width={60}
              height={60}
              alt="Marker on map"
            />
          </a>
        </Link>
      </div>
    </MapGLMarker>
  );
};

export default Marker;
