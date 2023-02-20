"use client"
import React from "react";
// import { FaStar } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IInputFiledProps } from "@/types";

interface SafariFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  departureDate: string;
  safariType: string;
  safariDuration: string;
  accommodationLevel: string;
  otherServices: string[];
  specialInterests: string;
}

const InputField = ({ label, idAndName, type = null, placeholder ='' ,styles, messageStyles, fieldStyles,labelStyles }: IInputFiledProps) => (
  <div className={`flex flex-col gap-2 px-3 my-2 bg-inherit bg-opacity-75 rounded-xl ${styles ? styles : ''}`}>
    <label className={` ${labelStyles}`}>
    <span>  {label} </span></label>
    <div>
      <Field
        type={`${type ? type : 'text'}`}
        name={idAndName}
        className={`px-5 p-2 rounded-md  ${messageStyles}`}
        placeholder = {placeholder||label}
      />
      <ErrorMessage  component={'div'} name={idAndName} className={`text-red-500 p-5 ${messageStyles}`} />

    </div>
  </div>
);
const InputField2 = ({ label, idAndName, type = null, placeholder ='' ,styles, messageStyles, fieldStyles,labelStyles }: IInputFiledProps) => (
  <div className={`form-control  ${styles ? styles : ''}`}>
    <label className={`label ${labelStyles}`}>
    <span>  {label} </span></label>
    <div>
      <Field
        type={`form-input  ${type ? type : 'text'}`}
        name={idAndName}
        className={`px-5 p-2 rounded-md  ${messageStyles}`}
        placeholder = {placeholder||label}
      />
      <ErrorMessage  component={'div'} name={idAndName} className={`text-red-500 p-5 ${messageStyles}`} />

    </div>
  </div>
);

const SAFARI_TYPES = [
  { label: "--Select Safari Type--", value: "" },
  { label: "Custom Trip Package", value: "Custom Trip Package" },
  { label: "Pre-Packaged Group Tour", value: "Pre-Packaged Group Tour" },
  { label: "Travel Specialist Suggestions", value: "Travel Specialist Suggestions" },
];

const SAFARI_DURATIONS = [
  { label: "--Select Safari Duration--", value: "" },
  { label: "5 Days", value: "5 Days" },
  { label: "6 Days", value: "6 Days" },
  { label: "7 Days", value: "7 Days" },
  { label: "8 Days", value: "8 Days" },
  { label: "9 Days", value: "9 Days" },
  { label: "10 Days", value: "10 Days" },
];

const ACCOMMODATION_LEVELS = [
  // { label: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>, value: "5 Star" },
  // { label: <><FaStar /><FaStar /><FaStar /><FaStar /></>, value: "4 Star" },
  // { label: <><FaStar /><FaStar /><FaStar /></>, value: "3 Star" },
  { label: "5 Start", value: "5Star" },
  { label: "4 Start", value: "4Star" },
  { label: "3 Start", value: "3Star" },
  { label: "Budget", value: "Budget" },
  { label: "Camping", value: "Camping" },
];
const BookingForm: React.FC = () => {
  const initialValues: SafariFormData = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    departureDate: "",
    safariType: "",
    safariDuration: "",
    accommodationLevel: "",
    otherServices: [],
    specialInterests: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    departureDate: Yup.string().required("Departure date is required"),
    safariType: Yup.string().required("Safari type is required"),
    safariDuration: Yup.string().required("Safari duration is required"),
    accommodationLevel: Yup.string().required("Accommodation level is required"),
  });

  const onSubmit = (values: SafariFormData) => {
    console.log(values);
    fetch('/api/booking', 
      {body:JSON.stringify(values),method:"POST"}
    ).then(res=>res.json())
    .then(data=>console.log({data}))
    .catch(err=>console.log({err}))
  };



  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className="flex flex-col items-center justify-center">
          <div className="flex flex-col py-2 max-w-md">
            <InputField
              label={'Full Name'}
              idAndName={'fullName'}
            />
            <InputField
              label={'Email Address'}
              idAndName={'email'}
            />

            <InputField
              label={'Phone Number'}
              type='tel'
              idAndName={'phone'}
            />

            <InputField
              label={'Country'}
              idAndName={'country'}
            />
            <InputField
              label={'Departure Date'}
              type='date'
              idAndName={'departureDate'}
            />

           

            <label className="block px-3 py-3">
              Safari Type:
              <Field as="select" name="safariType">
                {SAFARI_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}

              </Field>
              <ErrorMessage name="safariType" />
            </label>
            <label className="block px-3 py-3">
              Safari Duration:
              <Field as="select" name="safariDuration">
                {SAFARI_DURATIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="safariDuration" />
            </label>
            <label className="block px-3 py-3">
              Accommodation Level:
              <Field as="select" name="accommodationLevel">
                {ACCOMMODATION_LEVELS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="accommodationLevel" />
            </label>
            <label className="block px-3 py-3">
              Other Services Needed:
              <Field type="checkbox" name="otherServices" value="Activities" />
              Activities
              <Field type="checkbox" name="otherServices" value="Tour Guides" />
              Tour Guides
              <Field type="checkbox" name="otherServices" value="Unique Experiences" />
              Unique Experiences
            </label>
            <label className="block px-3 py-3">
              Special Interests:
              <Field type="text" name="specialInterests" />
            </label>
            <button type="submit" className=" btn btn-block btn-primary p-3">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;