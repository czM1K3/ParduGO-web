import React, { Children } from 'react';
import Link from 'next/link';

type ContainerProps = {
  heading: string;
};

const Container: React.FC<ContainerProps> = ({ heading, children }) => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-8/12">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="ext-gray-800 font-bold text-3xl text-pardubice-default">
              {heading}
            </h1>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200 w-full">
          <div className="px-5 py-7">
                { children }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
