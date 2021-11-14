import React from 'react';
import { HiPlusCircle, HiArrowSmRight } from 'react-icons/hi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useLoginMutation } from 'lib/graphql/login-register.graphql';
import Image from 'next/image';
import Logo from '@components/Navbar/pardugo.svg';

const LoginForm: React.FC = () => {
  const [mutation] = useLoginMutation();
  const router = useRouter();
  const [_cookie, setCookie] = useCookies(['authorization']);

  const submit = async (email: string, password: string) => {
    try {
      const response = await mutation({
        variables: {
          email,
          password,
        },
      });
      setCookie('authorization', response.data!.login);
      router.reload();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

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

      <Link href="/" passHref>
        <div className="flex items-center justify-center mb-4 cursor-pointer">
          <Image src={Logo} width={150} height={50} alt="ParduGo logo" />
        </div>
      </Link>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Vyplňte prosím email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Email není validní';
          }
          if (!values.password) {
            errors.email = 'Vyplňte prosím heslo';
          } else if (values.password.length < 8) {
            {
              errors.email = 'Heslo musí mít alespoň 8 znaků';
            }
            return errors;
          }
        }}
        onSubmit={async ({ email, password }) => {
          submit(email, password);
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
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Heslo
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pardubice-default focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="transition duration-200 bg-pardubice-default hover:bg-pardubice-dark focus:bg-pardubice-dark focus:shadow-sm focus:ring-4 focus:ring-pardubice-dark focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2 flex justify-center items-center">
                    Přihlásit se
                    <HiArrowSmRight className="float-right" />
                  </span>
                </button>
              </div>
              <div className="py-5 flex justify-center items-center text-center">
                <div>
                  <div className="text-center sm:text-left whitespace-nowrap">
                    <Link href="/prihlaseni/registrace" passHref>
                      <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <HiPlusCircle className="text-base float-left   " />
                        <span className="inline-block ml-1">
                          Zaregistrovat se
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
