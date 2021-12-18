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
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useEventQuery } from 'lib/graphql/event.graphql';

const Marker = ({
	id,
	latitude,
	longitude,
	category,
	description,
	name,
	isSomeOpen,
	setIsSomeOpen,
}: {
	latitude: number;
	longitude: number;
	category: string;
	id: string;
	description?: string;
	name?: string;
	isSomeOpen: boolean;
	setIsSomeOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const [hover, setHover] = useState(false);

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
			case 'Reklama':
				return Ad;
			default:
				return Other;
		}
	};

	const url = `/akce/${id}`;

	return (
		<MapGLMarker latitude={latitude} longitude={longitude}>
			<div className="relative">
				{hover && (
					<div className="absolute w-[150px] -translate-x-1/2 top-[-6rem] bg-white text-center rounded">
						{name}
					</div>
				)}
				<div
					className="-translate-y-1/2 -translate-x-1/2 cursor-pointer"
					onClick={() => {
						setHover(!hover);
					}}
					title={name}
				>
					<a>
						<Image
							src={getMarker(category)}
							width={60}
							height={60}
							alt="Marker on map"
						/>
					</a>
				</div>
			</div>
		</MapGLMarker>
	);
};

export default Marker;
