"use client"
import React from "react";
// import { FaStar } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IBookingForm} from "@/types";
import CountryOptions from "./CountryOptions";
import { InputField, InputFieldContainer } from "./form";




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
  {label: "", value:""},
  {label: "5 Star" , value:"5 Star" },
  {label: "4 Star" , value:"4 Star" },
  {label: "3 Star" , value:"3 Star" },
 { label: "Budget", value: "Budget" },
  { label: "Camping", value: "Camping" },
];

const BookingForm: React.FC = () => {
  const initialValues: IBookingForm = {
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

  const onSubmit = (values: IBookingForm) => {
    // console.log(values);
    fetch('/api/booking', {
      method:"POST",
      body:JSON.stringify(values)
    })
    .then(res=>res.json())
    .then(data=>{
      alert('booking was successful, check your email to proceed to payment!');
      console.log({in:"then in handle bookig",data})
    })
    .catch(err=>{
      alert("An error has occured, plz try again");
      console.log({in:"then in handle bookig",err})
    })
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form >
          <div className="flex flex-col gap-2 mx-auto max-w-md justify-center ">
            <InputField
              idAndName="fullName"
              type="text"
              label="Full Name"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="email"
              type="email"
              label="Email Address"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="phone"
              type="tel"
              label="Phone Number"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="country"
              type="select"
              label="Country"

            >
              <option value={''}> --- Country --- </option>
              <CountryOptions />
            </InputField>


            {/* <InputField 
          idAndName="departureDate"
          type="date"
          label="Departure Date"
          fieldStyles="form-input w-full"
          /> */}
          <InputFieldContainer styles="">
            <label className="py-2">
              Departure Date </label>
              <Field type="date" name="departureDate" className="w-full form-input px-5 p-2 rounded-md " />
              <ErrorMessage name="departureDate" />
           
            </InputFieldContainer>


            <InputField
              idAndName="safariType"
              type="select"
              options={SAFARI_TYPES}
              label="Safari Type"

            />



            {/* <label className="py-2">
        Safari Type:
        <Field as="select" className="form-select w-full" name="safariType">
          {SAFARI_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name="safariType" />
      </label> */}
            <InputField
              idAndName="safariDuration"
              type="select"
              label="Safari Duration"
              options={SAFARI_DURATIONS}
            />
            {/* <label className="py-2">
              Safari Duration:
              <Field as="select" className="form-select w-full" name="safariDuration">
                {SAFARI_DURATIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="safariDuration" />
            </label> */}
            <InputField
              idAndName="accommodationLevel"
              type="select"
              label="Accommodation Level"
              options={ACCOMMODATION_LEVELS}
            />
            

            <InputField
              idAndName="otherServices"
              type="checkbox"

              options={[
                { label: "Activities", value: "Activities" },
                { label: "Tour Guides", value: "Tour Guides" },
                { label: "Unique Experiences", value: "Unique Experiences" },
              ]}

              label="Other Services Needed"
              fieldStyles="form-input w-full"
            />

            {/* <label className="py-2">
        Other Services Needed:
        <Field type="checkbox" name="otherServices" value="Activities" />
        Activities
        <Field type="checkbox" name="otherServices" value="Tour Guides" />
        Tour Guides
        <Field type="checkbox" name="otherServices" value="Unique Experiences" />
        Unique Experiences
      </label> */}

            <InputField
              idAndName="specialInterests"

              label="Special Interests"
              fieldStyles="form-input w-full"
            />
            {/* <label className="py-2">
        Special Interests:
        <Field type="text" name="specialInterests" />
      </label> */}

            <button type="submit" className="w-5/6 btn btn-primary p-3 mb-3 mx-auto">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;