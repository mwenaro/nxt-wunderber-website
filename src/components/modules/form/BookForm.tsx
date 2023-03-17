
// "use client"
// import * as Yup from 'yup';
// import { Formik, FormikProps, Form } from 'formik';
// import InputField from './InputField';
// import { Button } from '../buttons';
// import { IFormField } from './types';


// export interface IFormProps extends FormikProps<any>{
//     formFields: IFormField[],
//     submitBtnLabel?: string

// }



// const ActualForm = ({ submitBtnLabel, formFields, ...rest }:  IFormProps) => (
//     <Form {...rest}>
//         <div>
//             {formFields.map(
//                 ({ label, idAndName, type, placeholder = '' }: IFormField, indx) => (
//                     <InputField
//                         key={indx}
//                         idAndName={idAndName}
//                         type={type}
//                         label={label as string}
//                         fieldStyles="form-input w-full"
//                         placeholder={placeholder}
//                     />
//                 )
//             )}
//             <Button type='submit'>
//                 {submitBtnLabel ? submitBtnLabel : 'submit'}
//             </Button>
//         </div>
//     </Form>
// );
// export interface IFormikFormContainerProps  {
//     initialValues: any,
//     validationSchema?: any,
//     handleSubmit: any
//     formProps?:IFormProps

// }

// export default function FormikFormContainer({ initialValues,
//     validationSchema,
//     handleSubmit,
//     formProps,
//     ...rest
// }: IFormikFormContainerProps) {
//     return (
//         <div className='p- sm:p-5 flex flex-col'>
            
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
                
//                 component={()=><ActualForm  {...formProps}/>}
//             />
//         </div>
//     )
// }


export {}
