import React from 'react';
import Eventheader from './Eventheader';
import Eventdate from './Eventdate';

const Eventcard = () => {
  return (
    <>
      <div className="py-4 px-8 bg-component-dark shadow rounded flex content-center my-1.5">
        <div>
          <Eventheader eventName="test"/>
          <Eventdate start="test" end="test"/>
        </div>
      </div>
    </>
  );
};

export default Eventcard;
