import React from 'react';
import Link from 'next/link';

type EventInfoProps = {
  web: string | undefined;
  price: number | undefined | null;
  contact_phone: string | undefined;
  contact_email: string | undefined;
  category: string | undefined;
  description: string | undefined;
};

const EventInfo: React.FC<EventInfoProps> = ({
  web,
  price,
  contact_phone,
  contact_email,
  category,
  description,
}) => {
  return (
    <div className="flex">
      <div className="py-4 px-8 bg-component-dark shadow rounded flex content-center my-1.5 w-1/2">
        <div className="w-4/6 flex flex-wrap justify-between text-base font-medium">
          <div className="w-full">{category}</div>
          <div className="w-full">{price}</div>
          <div className="w-full">
            <a href={web}>Webové stránky</a>
          </div>
          <div className="w-full">{contact_phone}</div>
          <div className="w-full">{contact_email}</div>
        </div>
      </div>
      <div className="ml-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem impedit quisquam modi quam maiores laborum tempora aspernatur, earum possimus quidem repellat suscipit doloribus temporibus libero, repellendus, dolorem illum dicta?
          Eaque quo rem consequuntur ipsam commodi, pariatur voluptatum! Eos eaque nihil et dolorum eum. Beatae eligendi, ex, voluptatum rerum minima nostrum placeat illum earum, dicta doloribus recusandae! Perferendis, obcaecati inventore.
          Optio obcaecati unde fugit illo libero deserunt illum molestiae totam hic! Iusto, impedit? Ut, natus velit minima ipsum minus quasi officia, placeat inventore error iste perspiciatis eos, unde et sapiente.
          Ea eligendi voluptatum, obcaecati quasi deleniti aut totam? Explicabo, iusto. Enim accusantium sunt consectetur sapiente voluptatibus esse dolore in dolorum pariatur ducimus, debitis totam, saepe, atque minima minus voluptatum iure!
          Ratione consequatur recusandae error, facere accusamus temporibus laborum! Vero eligendi ea similique? Reiciendis suscipit quam placeat in sint odit cupiditate rem esse error libero eum ut dignissimos fugit, expedita exercitationem.
          Beatae incidunt vitae quia ipsum voluptate distinctio quisquam delectus enim, aut impedit. Magni fugit rerum laudantium animi, dolore quas accusantium dignissimos cum inventore maiores magnam nemo quae quos tenetur ad.
          Architecto velit, libero quam vitae illum eius blanditiis ullam unde repudiandae perferendis officia vel dolores quos, officiis fugit iste itaque cum commodi ad modi beatae esse. Neque error perferendis labore!
          Perspiciatis quibusdam laboriosam aspernatur temporibus officiis illo fugiat voluptas voluptatem sapiente ullam cupiditate itaque laudantium nihil adipisci dolorum labore mollitia, quaerat ducimus aliquid. Quo, quam molestias repellendus cum temporibus natus!
          Provident quos, rem ea tempore inventore nam sint odit omnis debitis, quibusdam nihil? Quia fugiat ad molestias nobis reiciendis temporibus ab unde accusamus inventore, quaerat rem debitis, voluptates atque quod.
          Hic, fugit sit. Obcaecati illum, earum quaerat fuga fugit provident nulla veniam iste explicabo consequuntur architecto, nesciunt rerum soluta, ex cum aliquid cupiditate hic amet autem eos. Nobis, nam! Repudiandae.
      </div>
    </div>
  );
};

export default EventInfo;
