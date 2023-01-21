import { Button, LogoLink } from "../home";
import { FormGroup, Input, Label } from "../FormElements";
import { HiOutlineMail, HiOutlineUserAdd } from "react-icons/hi";

import React from "react";
import { useFormik } from "formik";

const JoinWaitlistForm = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Please enter your full name";
    } else if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formikSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    window.location = "/";
  };

  const formik = useFormik({
    initialValues: { email: "", fullname: "" },
    validate: (values) => validateForm(values),
    onSubmit: (values, { resetForm }) => {
      setTimeout(formikSubmit(values), 3000);
      resetForm();
    },
  });

  return (
    <>
      <LogoLink className="mt-[33px]" shrink={false} violet />

      <form
        className="mt-16 mb-[33px] flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-[#2B2B8B] font-semibold text-[36px] text-left mb-6">
          Join Waitlist
        </h1>

        <FormGroup>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            id="fullname"
            name="fullname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
            icon={<HiOutlineUserAdd size={30} color="#10211E40" />}
          />
          <span className="text-red-500">
            {formik.errors.fullname &&
              formik.touched.fullname &&
              formik.errors.fullname}
          </span>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            icon={<HiOutlineMail size={30} color="#10211E40" />}
          />
          <span className="text-red-500">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </span>
        </FormGroup>

        <Button
          className="w-[300px] mx-auto disabled:bg-red-500"
          disabled={formik.isSubmitting}
        >
          Join Waitlist
        </Button>
      </form>
    </>
  );
};

export default JoinWaitlistForm;
