import React from 'react';
import { EventCard } from '../EventCard';
import { Category } from '../Category';
import { GetAllEventsQuery } from '../../lib/graphql/index.graphql';
import HelpUs from '../../public/category/category-helpus.svg';
import Ad from '../../public/category/category-ad.svg';
import Sport from '../../public/category/category-sport.svg';
import Film from '../../public/category/category-film.svg';
import Music from '../../public/category/category-music.svg';
import Others from '../../public/category/category-others.svg';
import Policy from '../../public/category/category-policy.svg';
import Theatre from '../../public/category/category-theatre.svg';
import Event from '../../public/category/category-event.svg';
import Concert from '../../public/category/category-concert.svg';

type SidebarProps = {
	data: GetAllEventsQuery;
};

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
	return (
		<div className="w-full h-full bg-white shadow flex flex-col p-8 overflow-scroll	overflow-x-hidden">
			<div className="mb-8">
				<h1 className="text-gray-800 font-bold text-3xl">
					Veškeré akce v <span className="text-pardubice-default">Pardubicích</span>
				</h1>
			</div>
			<div className="flex flex-wrap mb-8">
				<Category category_name="Reklama" icon={Ad} />
				<Category category_name="Pomožte nám" icon={HelpUs} />
				<Category category_name="Akce" icon={Event} />
				<Category category_name="Sport" icon={Sport} />
				<Category category_name="Film" icon={Film} />
				<Category category_name="Divadlo" icon={Theatre} />
				<Category category_name="Koncert" icon={Concert} />
				<Category category_name="Hudba" icon={Music} />
				<Category category_name="Politika" icon={Policy} />
				<Category category_name="Jiné" icon={Others} />
			</div>
			<div className="max-h-0">
				{data.getAllEvents.map((event) => (
					<EventCard
						key={event.id}
						id={event.id}
						url={`/akce/${event.id}`}
						name={event.name}
						start={event.start}
						end={event.end}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
