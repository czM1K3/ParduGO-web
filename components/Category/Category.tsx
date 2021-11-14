import React from 'react';
import Image from 'next/image';

type CategoryProps = { category_name: string; icon: string };

const Category: React.FC<CategoryProps> = ({ category_name, icon }) => {
  return (
    <>
      <div className="p-8 bg-component-dark shadow rounded grid column content-center my-1.5 w-max m-1 hover:cursor-pointer border hover:shadow-md text-center hover:text-pardubice-default hover:border-pardubice-default">
        <Image src={icon} width={40} height={40} alt="picture of category" />
        <span className="font-bold text-sm mt-2">
          {category_name}
        </span>
      </div>
    </>
  );
};

export default Category;
