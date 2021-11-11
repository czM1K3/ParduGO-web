import React from 'react';
import Eventheader from './Eventheader';
import Eventdate from './Eventdate';
import Link from 'next/link';


type EventcardProps = { url: string };

const Eventcard: React.FC<EventcardProps> = ({ url }) => {
  return (
    <>
      <Link href={url} passHref>
        <a>
          <div className="py-4 px-8 bg-component-dark shadow rounded flex content-center my-1.5">
            <div className="w-4/5">
              <Eventheader eventName="Paměť národa: 7. ročník sbírky ke Dni válečných veteránů 2021" />
              <Eventdate start="11.11.2021" end="13.11.2021" />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Eventcard;
