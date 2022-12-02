import React from "react";
import houseing from "../../assets/images.jpg";
import {  useFormik } from "formik";
import * as yup from "yup";
function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .trim()
        .max(8, "Minmum be 8 characters ")
        .required("required"),
      email: yup
        .string()
        .trim()
        .email("invalid email adress")
        .required("required"),
      phonenumber: yup
        .string()
        .trim()
        .length(10, "phone number must be of 10 digit")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <header>
        <nav className=" p-4  shadow-lg bg-black text-weslint-plugin-prettier hite">
          <div className="font-bold font-poppins">
            <span>Chef Table</span>
          </div>
        </nav>
      </header>
      <section className="bg-gray-300 min-w-fit min-h-screen  justify-between flex ">
        <article className="bg-white w-full flex flex-col justify-between items-center  p-8 m-4  md:flex-row ">
          <div className="md:pr-8">
            <h2 className="font-bold pb-8 font-poppins">Need help?</h2>
            <p className=" pb-4 font-poppins">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              soluta ipsam nostrum ad debitis ut. Lorem, ipsum dolor sit amet
            </p>
            <img src={houseing} alt="" className="w-full  mb-8" />
          </div>
          <div className="w-full">
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="mb-6  w-full">
                <input
                  className={`bg-gray-100 w-full p-2  ${
                    formik.errors.name ? "outline-red-500" : "outline-blue-500"
                  }`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-xs">{formik.errors.name}</p>
                ) : (
                  <p className="h-4 w-4"></p>
                )}
              </div>

              <div className="mb-6 w-full">
                <input
                  className={` bg-gray-100 w-full p-2 "outline-red-500"  ${
                    formik.errors.email ? "outline-red-500" : "outline-blue-500"
                  } `}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-xs"> {formik.errors.email} </p>
                ) : (
                  <p className="h-4 w-4"></p>
                )}
              </div>

              <div className="mb-6  w-full ">
                <input
                  className={`bg-gray-100 w-full p-2 ${
                    formik.errors.phonenumber
                      ? "outline-red-500"
                      : "outline-blue-500"
                  } `}
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  placeholder="Phonenumber"
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber ? (
                  <p className="text-xs "> {formik.errors.phonenumber} </p>
                ) : (
                  <p className="h-4 w-4"></p>
                )}
              </div>

              <textarea
                className="bg-gray-100 w-full p-2 mb-4"
                cols="30"
                rows="10"
                id="message"
                name="message"
                placeholder="your thoughts"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              <button
                className={`bg-black text-white w-full p-2 mb-4 ${
                  !formik.isValid ? "opacity-60" : "opacity-100"
                } `}
                type="Submit"
                onClick={() => console.log(formik.isValid, formik)}
                disabled={!formik.isValid}
              >
                {" "}
                Submit Feedback
              </button>
            </form>
          </div>
        </article>
      </section>
      <footer className="bg-black text-white p-8">
        <div className="footer-logo text-center ">
          <div className="font-bold">
            <span>Chef Table</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center pt-4 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="">
            <div className="text-left">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <div className="">
                <ul className="flex justify-center">
                  <li className="p-3"> 😃 </li>
                  <li className="p-3"> 😃 </li>
                  <li className="p-3"> 😃 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text pb-3">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
          <div className="">
            <div className="text pb-3">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
          <div className="">
            <div className="text pb-3">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
