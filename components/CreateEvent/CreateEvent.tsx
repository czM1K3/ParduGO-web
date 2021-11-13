import React from 'react';
import { HiMap, HiPlusCircle } from 'react-icons/hi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { useCreateEventMutation } from '../../lib/graphql/administrace.graphql';
import { useRouter } from 'next/router';

const CreateEvent: React.FC = () => {
  const [mutation] = useCreateEventMutation();
  const router = useRouter();

  const rows = 4;
  const cols = 50;

  const submit = async (values: {
    name: string,
    latitude: number,
    longitude: number,
    startTime: string,
    endTime: string,
    category: string,
    web: string,
    contactPhone: string,
    contactEmail: string,
    description: string,
    price: number,
  }) => {
    try {
      await mutation({
        variables: {
          input: {
            category: values.category,
            contactEmail: values.contactEmail,
            contactPhone: values.contactPhone,
            description: values.description,
            endTime: `${new Date(values.endTime).getTime()}`,            
            startTime: `${new Date(values.startTime).getTime()}`,
            latitude: values.latitude,
            longitude: values.longitude,
            name: values.name,
            price: values.price === 0 ? null : values.price,
            web: values.web,
          }
        }
      });
      router.push('/administrace');
    } catch (error: any) {
      toast.error(error.message);
    }
   }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <Formik
        initialValues={{
          name: '',
          latitude: 50.04,
          longitude: 15.78,
          startTime: '',
          endTime: '',
          category: 'Sport',
          web: '',
          contactPhone: '',
          contactEmail: '',
          description: '',
          price: 0,
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.name) errors.name = 'Vyplňte prosím název akce';
          if (!values.description) errors.description = 'Vyplňte prosím popis akce';
          if (!values.startTime) errors.startTime = 'Vyplňte prosím datum začátku akce';
          if (!values.endTime) errors.endTime = 'Vyplňte prosím datum konce akce';
          if (!values.web) errors.web = 'Vyplňte prosím webovou stránku akce';
          if (!values.contactPhone) errors.contactPhone = 'Vyplňte prosím telefonní číslo kontaktu';
          if (!values.contactEmail) errors.contactEmail = 'Vyplňte prosím email kontaktu';
          return errors;
        }}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Název akce
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.name && touched.name && errors.name}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Začátek konání akce
              </label>
              <input
                type="datetime-local"
                name="startTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startTime}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.startTime && touched.startTime && errors.startTime}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Konec konání akce
              </label>
              <input
                type="datetime-local"
                name="endTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endTime}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.endTime && touched.endTime && errors.endTime}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                URL akce
              </label>
              <input
                type="text"
                name="web"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.web}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.web && touched.web && errors.web}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Kontaktní telefon
              </label>
              <input
                type="text"
                name="contactPhone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactPhone}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.contactPhone && touched.contactPhone && errors.contactPhone}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Kontaktní email
              </label>
              <input
                type="text"
                name="contactEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactEmail}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.contactEmail && touched.contactEmail && errors.contactEmail}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Kategorie
              </label>
              <select
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              >
                <option value="Sport">Sport</option>
                <option value="Hudba">Hudba</option>
                <option value="3Kultura">Kultura</option>
              </select>
              {errors.category && touched.category && errors.category}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Vstupné
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.price && touched.price && errors.price}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Zeměpisná šířka
              </label>
              <input
                type="number"
                name="latitude"
                step="0.001"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.latitude}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.latitude && touched.latitude && errors.latitude}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Zeměpisná výška
              </label>
              <input
                type="number"
                name="longitude"
                step="0.001"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.longitude}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.longitude && touched.longitude && errors.longitude}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Popis akce
              </label>
              <textarea
                name="description"
                rows={rows}
                cols={cols}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.description && touched.description && errors.description}

              <button
                type="submit"
                disabled={isSubmitting}
                className="transition duration-200 bg-pardubice-default hover:bg-pardubice-dark focus:bg-pardubice-dark focus:shadow-sm focus:ring-4 focus:ring-pardubice-dark focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2 flex justify-center items-center">
                  Vytvořit akci
                  <HiPlusCircle className="float-right ml-1" />
                </span>
              </button>
            </div>
            <div className="py-5 flex justify-center items-center text-center">
              <div>
                <div className="text-center sm:text-left whitespace-nowrap">
                  <Link href="/" passHref>
                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <HiMap className="text-base float-left   " />
                      <span className="inline-block ml-1">
                        Zpět na mapu
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEvent;
