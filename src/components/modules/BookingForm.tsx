"use client"
import React from "react";
// import { FaStar } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IBookingForm } from "@/types";
import CountryOptions from "./CountryOptions";
import { InputField, InputFieldContainer } from "./form";
import { postFormData } from "@/utils/fetch";
import { API } from "@/constants";
import { Button } from "./buttons";




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
    departureDate: Yup.date().required("Departure date is required"),
    // safariType: Yup.string().required("Safari type is required"),
    safariDuration: Yup.string().required("Safari duration is required"),
    // // participants:Yup.object().optional(),
    specialInterests: Yup.string(),

    // participants.kids: Yup.string().required("Safari duration is required"),

  });

  const onSubmit = async (values: IBookingForm) => {
    console.log(values)
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(props) => (
        <Form  >
          <div className="flex flex-col  mx-auto max-w-md justify-center py-2 sm:py-5">
            <h3 className="text-center font-bold text-2xl">Fill the form to book </h3>
            <InputField
              idAndName="fullName"
              type="text"
              placeholder="Full Name"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="email"
              type="email"
              placeholder="Email Address"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="phone"
              type="tel"
              placeholder="Phone Number"
              fieldStyles="form-input w-full"
            />

            <InputField
              idAndName="country"
              type="select"
            // label="Country"

            >
              <option value={''}> --- Country --- </option>
              <CountryOptions />
            </InputField>


            <InputField
              idAndName="departureDate"
              type="date"
              label="Departure Date"

            />

            <div className="flex flex-col w-full px-3">
              <label className="p4">Number of People:</label>
              <div className="grid grid-cols-2 gap-3 pl-5">
                <InputField
                  idAndName="participants.adults"
                  styles="col-span-1"
                  type="number"
                  min={1}
                  required='required'
                  label="Adults"

                />
                <InputField
                  idAndName="participants.kids"
                  styles="col-span-1 "
                  type="number"
                  min={0}
                  label="Kids"

                />
              </div>

            </div>



            <InputField
              idAndName="safariDuration"
              type="select"
              // label="Safari Duration"
              options={SAFARI_DURATIONS}
            />

            <InputField
              idAndName="specialInterests"
              type="textarea"
              placeholder="Special Ineterets"

            />




            <Button type="submit" styles="my-5">Submit</Button>
           

          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;