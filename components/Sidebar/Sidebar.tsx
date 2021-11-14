import React from 'react';
import { EventCard } from '../EventCard';
import { Category } from '../Category';
import { GetAllEventsQuery } from '../../lib/graphql/index.graphql';

type SidebarProps = {
  data: GetAllEventsQuery;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <div className="w-full h-full bg-white shadow flex flex-col p-8 overflow-scroll	overflow-x-hidden">
      <div className="mb-8">
        <h1 className="ext-gray-800 font-bold text-3xl">Veškeré akce v <span className="text-pardubice-default">Pardubicích</span></h1>
      </div>
      <div className="flex flex-wrap mb-8">
        <Category category_name="Sport"/>
        <Category category_name="Hudba"/>
        <Category category_name="Kultura"/>
      </div>
      <div className="max-h-0">
        {data.getAllEvents.map((event) => <EventCard key={event.id} url={`/akce/${event.id}`} name={event.name} start={event.start} end={event.end} />)}
      </div>
    </div>
  );
};

export default Sidebar;
