import React from 'react';

type EventcardHeaderProps = { eventName: string };

const Eventheader: React.FC<EventcardHeaderProps> = ({ eventName }) => {
  return <h1 className="text-gray-800 font-bold text-lg">{eventName}</h1>;
};

export default Eventheader;
