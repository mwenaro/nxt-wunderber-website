"use client";
import * as Yup from "yup";
import { Formik, FormikProps, Form } from "formik";
import { IFormField, InputField } from "./form";
import { Button } from "./buttons";
import { postFormData } from "@/utils/fetch";
import { ToastContainer, errorToast, successToast } from "./toast";
import { useState } from "react";

interface FormValues {
  email: string;
  fullName: string;
  subject: string;
  body: string;
}

const initialValues = {
  email: "",
  fullName: "",
  subject: "",
  body: "",
};

const FORM_FIELDS: IFormField[] = [
  { label: "", type: "text", placeholder: "Full Name", idAndName: "fullName" },
  { label: "", type: "email", placeholder: "Enter Email", idAndName: "email" },
  { label: "", type: "text", placeholder: "Subject", idAndName: "subject" },
  {
    label: "Message",
    type: "textarea",
    placeholder: "Message  ... ",
    idAndName: "body",
  },
];

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Plese Enter your Email"),
  fullName: Yup.string()
    .required("Name is Required")

    .required("Plese Enter your Email"),
  subject: Yup.string().required("Subject is Required"),
  body: Yup.string().required("Message is Required"),
});

const onSubmit = async (values: FormValues) => {
  // console.log(values)

  try {
    let res = await postFormData("contact2", values);
    let data = await res.json();
      console.log({data})
    successToast(
      "Dear Valued Guest. Thank you for contacting us, check your email your for further directions."
    );
    // location.reload();
  } catch (error) {
    console.log(error);
    errorToast("There was an error, please try again");
  }
};

const ActualForm = (props: FormikProps<FormValues>) => {
   const[showOtherField, toggleOtherFiled] = useState<boolean>(false) ;
   const[selectedValue, setSelectedValue] = useState<string>('') ;
          const handleSelectChange = (e:any)=>{
           const value:string = e.target.value;
           console.log(value)
            setSelectedValue(value)
            if(value === 'Others'){
              
              toggleOtherFiled(true);
            }else{
              toggleOtherFiled(false);
            }
          }
        
  return <Form>
    <div>
      {FORM_FIELDS.map(
        ({ label, idAndName, type, placeholder = "" }: IFormField, indx) => {
         

          const re =
            idAndName === "subject" ? (
              showOtherField ?(
                <InputField
                  key={indx+Math.random()*100}
                  idAndName={idAndName}
                  type={type}
                  label={label as string}
                  fieldStyles="form-input w-full"
                  placeholder={placeholder}
                />):
                <InputField
                key={indx+Math.random()*100}
                  idAndName={idAndName}
                  type="select"
                  // value={selectedValue}
                  // onChange = {handleSelectChange}
                
                >
                  <option value={""}> --- Category --- </option>
                  <option value={"Pricing"}>Pricing</option>
                  <option value={"Flight Booking"}>Flight Booking</option>
                  <option value={"Hotels"}>Hotels</option>
                  <option value={"Car Rentals"}>Car Rentals</option>
                  <option value={"Tour Packages"}>Tour Packages</option>
                  <option value={"Attraction Sites"}>Attraction Sites</option>
                  <option value={"Others"} >Others</option>
                  
                </InputField>
              
            ) : (
              <InputField
                key={indx}
                idAndName={idAndName}
                type={type}
                label={label as string}
                fieldStyles="form-input w-full"
                placeholder={placeholder}
              />
            );

          return re;
        }
      )}
      <Button type="submit">send</Button>
    </div>
  </Form>
};

export default function ContactForm() {

  return (
    <div className="p- sm:p-5 flex flex-col">
      <h3>Contact</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        component={ActualForm}
      />
      <ToastContainer></ToastContainer>
    </div>
  );
}
