import React from 'react';
import { dayToString } from '../../utils/date';

type EventcardDateProps = {
	start: string;
	end: string;
	start_day: number;
	end_day: number;
};

const Eventheader: React.FC<EventcardDateProps> = ({
	start,
	end,
	start_day,
	end_day,
}) => {
	return (
		<p className="text-gray-800 font-bold text-sm">
			{dayToString(start_day)} {start} - {dayToString(end_day)} {end}
		</p>
	);
};

export default Eventheader;
