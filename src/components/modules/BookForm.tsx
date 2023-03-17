
"use client"
import * as Yup from 'yup';
import { Formik, FormikProps, Form } from 'formik';
import { IFormField, InputField } from './form';
import { Button } from './buttons';



interface FormValues {
    email: string;
    fullName : string
    subject : string
    message:string
}

const initialValues= {
    email: '',
    fullName : '',
    subject : '',
    message:'',
}


const FORM_FIELDS: IFormField[] = [
    { label: "", type: "text", placeholder: "Full Name", idAndName: "fullName" },
    { label: "", type: "email", placeholder: "Enter Email", idAndName: "email" },
    { label: "", type: "text", placeholder: "Subject", idAndName: "subject" },
    { label: "Message", type: "textarea", placeholder: "Message  ... ", idAndName: "message" },

];

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Plese Enter your Email'),
    fullName: Yup.string()
        .required('Name is Required')

        .required('Plese Enter your Email'),
    subject: Yup.string()
        .required('Subject is Required'),
    message: Yup.string()
        .required('Message is Required'),
});

const ActualForm = (props: FormikProps<FormValues>) => (
    <Form {...props}>
        <div>
        {FORM_FIELDS.map(
            ({ label, idAndName, type, placeholder = '' }: IFormField, indx) => (
                <InputField
                    key={indx}
                    idAndName={idAndName}
                    type={type}
                    label={label as string}
                    fieldStyles="form-input w-full"
                    placeholder={placeholder}
                />
            )
        )}
        <Button type='submit'>
            send
        </Button>
        </div>
    </Form>
);

export default function BookForm() {
    return (
        <div className='p- sm:p-5 flex flex-col'>
            <h3>Contact</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
                component={ActualForm}
            />
        </div>
    )
}



