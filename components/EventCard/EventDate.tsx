import React from 'react';
import { dayToString } from '../../utils/date';

type EventcardDateProps = { start: string; end: string, start_day: number, end_day: number };

const Eventheader: React.FC<EventcardDateProps> = ({ start, end, start_day, end_day }) => {
  return <p className="text-pardubice-default font-bold text-sm">{ dayToString(start_day)} {start} - {end} {  dayToString(end_day)}</p>;
};

export default Eventheader;
