import React from 'react';
import Link from 'next/link';
import {
  HiOutlineGlobe,
  HiOutlineTicket,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineFlag,
} from 'react-icons/hi';
import Image from 'next/image';
import EventLogo from '@public/pardugo-icon.svg';
import { dayToString } from 'utils/date';

type EventInfoProps = {
  web: string;
  price: number | null;
  contact_phone: string;
  contact_email: string;
  category: string;
  description: string;
  name: string;
  start: string ;
  end: string;
};

const EventInfo: React.FC<EventInfoProps> = ({
  web,
  price,
  contact_phone,
  contact_email,
  category,
  description,
  name,
  start,
  end,
}) => {
  const newStart = new Date(parseInt(start));
  const newEnd = new Date(parseInt(end));
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Image width={100} height={100} src={EventLogo} alt="EventLogo" />
        <div>
          <h1 className="text-gray-800 font-bold text-3xl text-pardubice-default">
            {name}
          </h1>
          <span className="font-bold text-pardubice-default">{ `${dayToString(newStart.getDay())} ${newStart.toLocaleDateString("cs-cz")} - ${dayToString(newEnd.getDay())} ${newEnd.toLocaleDateString("cs-cz")}`}</span>
        </div>
      </div>
      <div className="py-4 px-8 bg-component-dark shadow rounded flex content-center my-1.5 w-1/1 items-center content-center">
        <div className="font-medium w-full grid rows text-base">
          <div className="w-full flex items-center">
            <HiOutlineFlag className="float-left mr-2 text-pardubice-default" />
            <span>{category}</span>
          </div>
          <div className="w-full flex items-center">
            <HiOutlineTicket className="float-left mr-2 text-pardubice-default" />
            <span>{price ? price + ",-" : "Bez vstupenek"}</span>
          </div>
          <div className="w-full flex items-center">
            <HiOutlineGlobe className="float-left mr-2 text-pardubice-default" />
            <a href={web} className="underline">
              Webové stránky
            </a>
          </div>
          <div className="w-full flex items-center">
            <HiOutlinePhone className="float-left mr-2 text-pardubice-default" />
            <span>{contact_phone}</span>
          </div>
          <div className="w-full flex items-center">
            <HiOutlineMail className="float-left mr-2 text-pardubice-default" />
            <span>{contact_email}</span>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-4">{description}</div>
    </div>
  );
};

export default EventInfo;
