import React from 'react';
import { HiMap, HiPlusCircle } from 'react-icons/hi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';

const create = () => toast.success('Akce byla vytvořena!');
const CreateEvent: React.FC = () => {
  const rows = 4;
  const cols = 50;
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
          latitude: 0,
          longitude: 0,
          startTime: '',
          endTime: '',
          category: '',
          web: '',
          contactPhone: '',
          contactEmail: '',
          description: '',
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.name) {
            errors.name = 'Vyplňte prosím název akce';
          }
          if (!values.description) {
            errors.email = 'Vyplňte prosím popis akce';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            create();
          });
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
                name="contactPhone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.web}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
              />
              {errors.web && touched.web && errors.web}

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
                <option value="1">Sport</option>
                <option value="2">Hudba</option>
                <option value="3">Kultura</option>
              </select>
              {errors.web && touched.web && errors.web}

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
                  <HiPlusCircle className="float-right ml-1"/>
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
