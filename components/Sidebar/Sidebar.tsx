import React from 'react';
import { EventCard } from '../Eventcard/';
import { Category } from '../Category';

const Sidebar = () => {
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
      <EventCard url="/akce/1"/>
      <EventCard url="/akce/1"/>
      <EventCard url="/akce/1"/>
      <EventCard url="/akce/1"/>
      </div>
    </div>
  );
};

export default Sidebar;
