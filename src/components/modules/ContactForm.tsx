
import * as Yup from 'yup';
import { Formik, FormikProps, Form, Field } from 'formik';

interface FormValues {
    email: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const SignupForm = (props: FormikProps<FormValues>) => (
    <Form>
        <Field name="email" type="email" placeholder="Email" />
        {props.errors.email && props.touched.email && <div>{props.errors.email}</div>}

        <Field name="password" type="password" placeholder="Password" />
        {props.errors.password && props.touched.password && <div>{props.errors.password}</div>}

        <button type="submit">Submit</button>
    </Form>
);

export default function ContactForm() {
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
                component={SignupForm}
            />
        </div>
    )
}



