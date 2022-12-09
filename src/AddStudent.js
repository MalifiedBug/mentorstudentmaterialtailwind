import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { mentorStudentUrl } from "./Global";

export default function AddStudent() {
  const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", image: "", country: "", about: "",course:"" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        image: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        country: Yup.string().required("Required"),
        about: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
      })}
      onSubmit={(values, { setSubmitting }) => {
         axios.post(`${mentorStudentUrl}/student`,{
            name:values.name,
            email:values.email,
            image:values.image,
            country:values.country,
            about:values.about,
            course:values.course,
            acceptedTerms:values.acceptedTerms
        }).then(function (response) {
            alert(response);
          })
          .catch(function (error) {
            alert(error);
          });

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form class="w-full max-w-sm p-4 ">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="name"
            >
              Student Name
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              name="name"
              type="text"
              placeholder="Mentor Name"
            ></Field>
            <ErrorMessage className="text-red-500" name="name" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="email"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              name="email"
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="email"
              placeholder="Email Id"
            ></Field>
            <ErrorMessage name="email" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="image"
            >
              Profile Image
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              name="image"
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="image"
              type="text"
              placeholder="Image url"
            ></Field>
            <ErrorMessage name="image" />
          </div>          
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="course"
            >
              Coursee
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              name="course"
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="course"
              type="text"
              placeholder="Course"
            ></Field>
            <ErrorMessage name="image" />
          </div>          
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="country"
            >
              Country
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              name="country"
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="country"
              type="text"
              placeholder="Country"
            ></Field>
            <ErrorMessage name="country" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="about"
            >
              About Yourself
            </label>
          </div>
          <div class="md:w-2/3">
            <Field
              name="about"
              class="bg-white border-indigo-800 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="about"
              type="text"
              placeholder="About"
            ></Field>
            <ErrorMessage name="about" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-indigo-800 font-bold">
            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>
          </label>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
