import React from 'react';
import { EventCard } from '../EventCard';
import { Category } from '../Category';
import { GetAllEventsQuery } from '../../lib/graphql/index.graphql';
import HelpUs from '@public/category/category-helpus.svg';
import Ad from '@public/category/category-ad.svg';
import Concert from '@public/category/category-concert.svg';
import Health from '@public/category/category-health.svg';
import Film from '@public/category/category-film.svg';
import Policy from '@public/category/category-policy.svg';
import Sport from '@public/category/category-sport.svg';
import Theatre from '@public/category/category-theatre.svg';
import Sound from '@public/category/category-music.svg';
import Event from '@public/category/category-event.svg';
import Other from '@public/category/category-others.svg';

type SidebarProps = {
  data: GetAllEventsQuery;
};

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <div className="w-full h-full bg-white shadow flex flex-col p-8 overflow-scroll	overflow-x-hidden">
      <div className="mb-8">
        <h1 className="ext-gray-800 font-bold text-3xl">
          Veškeré akce v{' '}
          <span className="text-pardubice-default">Pardubicích</span>
        </h1>
      </div>
      <div className="flex flex-wrap mb-8">
        <Category category_name="Akce" icon={Event}/>
        <Category category_name="Pomozte nám" icon={HelpUs} />
        <Category category_name="Zdraví" icon={Health}/>
        <Category category_name="Hudba" icon={Sound}/>
        <Category category_name="Sport" icon={Sport}/>
        <Category category_name="Divadlo" icon={Theatre}/>
        <Category category_name="Film" icon={Film}/>
        <Category category_name="Koncert" icon={Concert}/>
        <Category category_name="Politika" icon={Policy}/>
        <Category category_name="Jiné" icon={Other}/>
      </div>
      <div className="max-h-0 mb-4">
        {data.getAllEvents.map((event) => (
          <EventCard
            key={event.id}
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
