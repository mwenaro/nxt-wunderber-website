"use client"
import React from "react";
// import { FaStar } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IBookingForm } from "@/types";
import CountryOptions from "./CountryOptions";
import { InputField, InputFieldContainer } from "./form";
import { postFormData } from "@/utils/fetch";
import { API } from "@/constants";




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
  { label: "", value: "" },
  { label: "5 Star", value: "5 Star" },
  { label: "4 Star", value: "4 Star" },
  { label: "3 Star", value: "3 Star" },
  { label: "Budget", value: "Budget" },
  { label: "Camping", value: "Camping" },
];

const BookingForm: React.FC = () => {
  // consts
  const initialValues: IBookingForm = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    departureDate: "",
    safariType: "",
    safariDuration: "",
    // accommodationLevel: "",
    // otherServices: [],
    participants: { adults: 1, kids: 0 },

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
    // participants:Yup.required("")
    // participants.kids: Yup.string().required("Safari duration is required"),

  });

  const onSubmit = async (values: IBookingForm) => {

    const adults = values.participants?.adults || 0;
    const kids = values.participants?.kids || 0;
    // console.log(values);
    if (adults && adults <= 0) {

      if (kids && kids < 0 || adults < 0) {
        alert('Error ! Neither kids or Adults can have -ve adults!');
        return
      }

      alert('number of adults cannot be 0');

      return
    }
// console.log(location)


    fetch('/api/tourBooking', {method:"POST", body:JSON.stringify(values)})
    .then(res=>res.json())
    .then(data=>console.log({data}))
    .catch(err=>console.log({err}));
    
let data, error =[]
//     const { error, data } = await postFormData('/api/tourBooking', values);
// console.log({error, data})
return;

    if (data) {


      console.log(data)
      alert('booking was successful, check your email to proceed to payment!');
      // console.log({ data })


    }
    else {

      alert('An error has occured, please try again');
      console.log({ error })
    }
    // location.pathname = '/booking'
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, resetForm, handleChange, handleBlur, handleSubmit }) => (
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
              <label className="pt-2">
                Departure Date </label>
              <Field type="date" 
              
              name="departureDate" className="w-full form-input px-5 p-2 rounded-md " />
              <ErrorMessage name="departureDate" />

            </InputFieldContainer>


            <InputField
              idAndName="safariType"
              type="select"
              options={SAFARI_TYPES}
              label="Safari Type"

            />
            <div className="flex flex-col w-full">
              <label className="p4">Number of People:</label>
              <div className="grid grid-cols-2 gap-3 pl-5">
                <InputField
                  idAndName="participants.adults"
                  styles="col-span-1"
                  type="number"
                  min={1}
                  required='required'
                  options={SAFARI_TYPES}
                  label="Adults"

                />
                <InputField
                  idAndName="participants.kids"
                  styles="col-span-1 "
                  type="number"
                  min={0}
                  options={SAFARI_TYPES}
                  label="Kids"

                />
              </div>

            </div>



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
            {/* <InputField
              idAndName="accommodationLevel"
              type="select"
              label="Accommodation Level"
              options={ACCOMMODATION_LEVELS}
            /> */}


            {/* <InputField
              idAndName="otherServices"
              type="checkbox"

              options={[
                { label: "Activities", value: "Activities" },
                { label: "Tour Guides", value: "Tour Guides" },
                { label: "Unique Experiences", value: "Unique Experiences" },
              ]}

              label="Other Services Needed"
              fieldStyles="form-input w-full"
            /> */}

            {/* <label className="py-2">
        Other Services Needed:
        <Field type="checkbox" name="otherServices" value="Activities" />
        Activities
        <Field type="checkbox" name="otherServices" value="Tour Guides" />
        Tour Guides
        <Field type="checkbox" name="otherServices" value="Unique Experiences" />
        Unique Experiences
      </label> */}



            <InputFieldContainer styles="">
              <label className="pt-2">
                Special Ineterets </label>
              <Field as="textarea" rows={5} name="specialInterests" className="w-full form-textarea px-5 p-2 rounded-md " />
              <ErrorMessage name="specialInterests" />

            </InputFieldContainer>

            <div className="p-4">
              <button type="submit" className="w-full btn btn-primary p-3   mx-auto">Submit</button>
            </div>

          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;