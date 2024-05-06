import { Button, InputData, Typography } from "@/components/atoms";
import Question from "@/components/molechules/SubmitForm/Question";
import { YesNo } from "@/components/molechules/SubmitForm/YesNo";
import { validationSchema } from "@/utils/validationSchema";
import React, { useState } from "react";
import { Checkbox } from "@/components/molechules/SubmitForm/Checkbox";
import * as Yup from "yup";

export interface SubmitFormProps {
  name?: string;
  address?: string;
  email?: string;
  phonenumber?: string;
  onchange: (
    name: string,
    address: string,
    email: string,
    phonenumber: string
  ) => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  name,
  address,
  email,
  phonenumber,
  onchange,
}) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      const updatedForm = {
        ...prevState,
        [name]: value,
      };
      console.log(form);
      // Move the onchange call inside the setState callback
      onchange(
        updatedForm.name,
        updatedForm.address,
        updatedForm.email,
        updatedForm.phonenumber
      );
      return updatedForm;
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form values
      await validationSchema.validate(form, { abortEarly: false });
      // Clear previous errors if any
      setErrors({
        name: "",
        address: "",
        email: "",
        phonenumber: "",
      });

      // Since the form is valid, call the onchange function
      onchange(form.name, form.address, form.email, form.phonenumber);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: Record<string, string> = {}; // Define the object with an index signature
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message; // Only assign if path is not undefined
          }
        });
        setErrors(newErrors); // Set validation errors
      }
    }
  };

  return (
    <div className="space-y-4 mx-auto">
      <div className="w-[1024px] h-[160px] bg-[#F8F8F8] rounded-[10px]">
        <div className="w-[1024px] h-[31px] bg-blue-600 rounded-t-lg"></div>
        <div className="mt-5 pl-5 space-y-4">
          <Typography fontSize="h2" fontWeight="semibold">
            Apply Form
          </Typography>
          <Typography fontSize="h4" color="grey">
            Fill in this form so we can get your information
          </Typography>
        </div>
      </div>
      <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
        <div className="space-y-3 py-[28px]">
          <Typography className="pl-4" fontSize="h4">
            Full Name<span className="text-[16px] text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            value={form.name}
            name="name"
            type="text"
            className={
              errors.name
                ? " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.name && <p className="text-[#EB5757] pl-4">{errors.name}</p>}
        </div>
      </div>
      <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
        <div className="space-y-3 py-[28px]">
          <Typography className="pl-4" fontSize="h4">
            Address<span className="text-[16px] text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="address"
            value={form.address}
            type="text"
            className={
              errors.address
                ? " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-rose-700"
                : " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.address && (
            <p className="text-[#EB5757] pl-4">{errors.address}</p>
          )}
        </div>
      </div>
      <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
        <div className="space-y-3 py-[28px]">
          <Typography className="pl-4" fontSize="h4">
            Email<span className="text-[16px] text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="email"
            value={form.email}
            type="text"
            className={
              errors.email
                ? " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.email && (
            <p className="text-[#EB5757] pl-4">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
        <div className="space-y-3 py-[28px]">
          <Typography className="pl-4" fontSize="h4">
            Phone number<span className="text-[16px] text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="phonenumber"
            value={form.phonenumber}
            type="text"
            className={
              errors.phonenumber
                ? " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : " w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.phonenumber && (
            <p className="text-[#EB5757] pl-4">{errors.phonenumber}</p>
          )}
        </div>
      </div>
      <Question question={"Why u join volunteer?"} />
      <Checkbox question={"How old are you?"} options={["18-22", "22-25", '6474','guyf']} />
      <YesNo question={"Have you joined Volunteer before?"} />
      <div className="flex justify-end ">
        <Button
          className="bg-blue-600 w-[140px] h-[50px] rounded-2xl flex justify-center items-center text-white"
          onclick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SubmitForm;
