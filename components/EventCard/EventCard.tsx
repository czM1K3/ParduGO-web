import React from 'react';
import Eventheader from './EventHeader';
import Eventdate from './EventDate';
import Link from 'next/link';
import Image from 'next/image';
import EventImage from '@public/pardugo-icon.svg';
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { useFavorite } from 'utils/favoriteContext';

type EventcardProps = { id: string, url: string; start: string; end: string; name: string };

const EventCard: React.FC<EventcardProps> = ({ id, url, name, start, end }) => {
  const [favorites, setFavorites] = useFavorite();
  return (
    <>
      <Link href={url} passHref>
        <a>
          <div className="py-4 px-8 bg-component-dark shadow hover:shadow-md border rounded flex content-center my-3 hover:border-pardubice-default">
            <div className="flex content-center pr-4">
              <Image
                src={EventImage}
                width={70}
                height={70}
                alt="Marker on map"
                className="shadow "
              />
            </div>
            <div className="w-4/5">
              <Eventheader eventName={name} />
              <Eventdate
                start_day={new Date(parseInt(start)).getDay()}
                end_day={new Date(parseInt(end)).getDay()}
                start={new Date(parseInt(start)).toLocaleDateString('cs-cz')}
                end={new Date(parseInt(end)).toLocaleDateString('cs-cz')}
              />
            </div>
            <div className="flex items-center justify-center text-3xl text-pardubice-default"
              onClick={(e) => {
                e.preventDefault();
                if (favorites.includes(id)) {
                  setFavorites(favorites.filter(item => item !== id));
                } else {
                  setFavorites([...favorites, id]);
                }
              }}>
              <span>
                {favorites.includes(id) ? <HiStar /> : <HiOutlineStar />}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default EventCard;
