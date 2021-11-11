import React from 'react';
import Eventheader from './EventHeader';
import Eventdate from './EventDate';
import Link from 'next/link';

type EventcardProps = { url: string, start: string, end: string, name: string };

const EventCard: React.FC<EventcardProps> = ({ url, name, start, end }) => {
  return (
    <>
      <Link href={url} passHref>
        <a>
          <div className="py-4 px-8 bg-component-dark shadow rounded flex content-center my-1.5">
            <div className="w-4/5">
              <Eventheader eventName={name} />
              <Eventdate start_day={new Date(parseInt(start)).getDay()} end_day={new Date(parseInt(end)).getDay()} start={new Date(parseInt(start)).toLocaleDateString("cs-cz")} end={new Date(parseInt(end)).toLocaleDateString("cs-cz")}/>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default EventCard;
