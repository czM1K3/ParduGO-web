import React from 'react';

type EventcardDateProps = { start: string; end: string };

const Eventheader: React.FC<EventcardDateProps> = ({ start, end }) => {
  return <p className="text-pardubice-default font-bold text-sm">Pá {start} - So {end}</p>;
};

export default Eventheader;
