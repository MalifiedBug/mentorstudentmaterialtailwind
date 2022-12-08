import { useState} from "react";
import { Button } from "@material-tailwind/react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Fragment } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { mentorStudentUrl } from "./Global";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


export default function StudentCard({student}) {
    const [size, setSize] = useState(null);
    const [sizee, setSizee] = useState(null);
    const [sizeee, setSizeee] = useState(null);
 
  const handleOpen = (value) => setSize(value);
  const handleOpenProfile = (value) => setSizee(value);
  const handleOpenDelete = (value) => setSizeee(value);

  return (
    <Card className="w-80">
      <CardHeader floated={false} className="h-80">
        <img src={student.image} alt="" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {student.name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {student.course}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-2 pt-2">
      <Fragment>
      <Button color="yellow" size="sm" onClick={() => handleOpen("sm")} variant="gradient">
          Edit
        </Button>
        <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader className="text-center">Its a simple dialog.</DialogHeader>
        <DialogBody divider>
        <Formik
              initialValues={{
                name: student.name,
                email: student.email,
                image: student.image,
                country: student.country,
                about: student.about,
                course: student.course,
              }}
              validationSchema={Yup.object({
                name: Yup.string().max(15, "Must be 15 characters or less"),
                image: Yup.string(),
                email: Yup.string().email("Invalid email address"),
                country: Yup.string(),
                about: Yup.string(),
                course: Yup.string(),
              })}
              onSubmit={(values, { setSubmitting }) => {
                let initialName = student.name;
                axios
                  .put(`${mentorStudentUrl}/editstudent`, {
                    initialName: `${values.name}`,
                    name: `${values.name}`,
                    email: `${values.email}`,
                    image: `${values.image}`,
                    country: `${values.country}`,
                    about: `${values.about}`,
                    course: `${values.course}`,
                  })
                  .then(function (response) {
                    alert(response);
                  })
                  .catch(function (error) {
                    alert(error);
                  });

                setTimeout(() => {
                  alert(JSON.stringify([initialName, values], null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form class="w-full max-w-sm p-4">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="name"
                    >
                      student Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="student Name"
                    ></Field>
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="email"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      name="email"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="image"
                    >
                      Profile Image
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      name="image"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="course"
                    >
                      Course
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      name="course"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="course"
                      type="text"
                      placeholder="Course"
                    ></Field>
                    <ErrorMessage name="course" />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="country"
                    >
                      Country
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      name="country"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="about"
                    >
                      About Yourself
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <Field
                      name="about"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="about"
                      type="text"
                      placeholder="About"
                    ></Field>
                    <ErrorMessage name="about" />
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button
                      class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Make Changes
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </Fragment>       
      <Fragment>
      <Button color="blue" size="sm" onClick={() => handleOpenProfile("xs")} variant="gradient">
          Profile
        </Button>
        <Dialog
        open={
          sizee === "xs" ||
          sizee === "sm" ||
          sizee === "md" ||
          sizee === "lg" ||
          sizee === "xl" ||
          sizee === "xxl"
        }
        sizee={sizee || "md"}
        handler={handleOpenProfile}
      >
        <DialogHeader className="text-center">Its a simple dialog.</DialogHeader>
        <DialogBody divider>
        proflie info
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpenProfile(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpenProfile(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </Fragment> 
        <Button size="sm" color="green">
          call
        </Button>
        <Fragment>
      <Button color="red" size="sm" onClick={() => handleOpenDelete("sm")} variant="gradient">
          Delete
        </Button>
        <Dialog
        open={
          sizeee === "xs" ||
          sizeee === "sm" ||
          sizeee === "md" ||
          sizeee === "lg" ||
          sizeee === "xl" ||
          sizeee === "xxl"
        }
        sizeee={sizeee || "md"}
        handler={handleOpenDelete}
      >
        <DialogHeader className="text-center">Its a simple dialog.</DialogHeader>
        <DialogBody divider>
        Delete here
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpenDelete(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpenDelete(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </Fragment> 
      </CardFooter>
    </Card>
  );
}
