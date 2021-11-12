import React from 'react';

type CategoryProps = { category_name: string };

const Category: React.FC<CategoryProps> = ({ category_name }) => {
  return (
    <>
      <div className="p-8 bg-component-dark shadow rounded flex content-center my-1.5 w-max m-1">
        <span className="text-pardubice-default font-bold text-sm">{category_name}</span>
      </div>
    </>
  );
};

export default Category;
