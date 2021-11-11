import React from 'react';
import { Eventcard } from '../Eventcard/';

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-white shadow flex flex-col p-8">
      <div className="mb-8">
        <h1 className="ext-gray-800 font-bold text-3xl">Veškeré akce v <span className="text-pardubice-default">Pardubicích</span></h1>
      </div>
      <Eventcard />
      <Eventcard />
      <Eventcard />
      <Eventcard />
      <Eventcard />
    </div>
  );
};

export default Sidebar;
