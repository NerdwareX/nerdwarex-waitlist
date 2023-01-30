import { Button, LogoLink } from "../home";
import { FormGroup, Input, Label } from "../FormElements";
import { HiOutlineMail, HiOutlineUserAdd } from "react-icons/hi";

import React, { useState } from "react";
import { toast } from "react-toastify";

const JoinWaitlistForm = ({ status, message, onValidated, handleClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [errors, setErrors] = useState({ fullname: "", email: "" });

  const validateForm = () => {
    if (!fullname) {
      setErrors({ ...errors, fullname: "Please enter your full name" });
      return false;
    } else if (!email) {
      setErrors({ fullname: "", email: "Please enter your email" });
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrors({ fullname: "", email: "Invalid email address" });
      return false;
    } else {
      setErrors({ fullname: "", email: "" });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (validateForm()) {
      onValidated({
        MERGE0: email,
        MERGE1: fullname,
      });

      if (status === "success") {
        toast.success(message);
        setEmail("");
        setFullName("");
        handleClose();
      } else if (status === "sending") {
        toast.info(message, { autoClose: 300 });
      } else if (status === "error") {
        toast.error(message, { autoClose: 1000 });
      }
    }
    setSubmitting(false);
  };

  return (
    <>
      <LogoLink className="mt-[33px]" shrink={false} violet />

      <form
        className="mt-16 mb-[33px] flex flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-[#2B2B8B] font-semibold text-[36px] text-left mb-6">
          Join Waitlist
        </h1>

        <FormGroup>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            id="fullname"
            name="fullname"
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            icon={<HiOutlineUserAdd size={30} color="#10211E40" />}
          />
          <span className="text-red-500">
            {errors.fullname && errors.fullname}
          </span>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            icon={<HiOutlineMail size={30} color="#10211E40" />}
          />
          <span className="text-red-500">{errors.email && errors.email}</span>
        </FormGroup>

        <Button
          className="w-[300px] mx-auto"
          type="submit"
          disabled={submitting}
        >
          Join Waitlist
        </Button>
      </form>
    </>
  );
};

export default JoinWaitlistForm;
