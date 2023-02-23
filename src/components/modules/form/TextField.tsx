"use client"
import { IInputFiledProps } from "@/types";
import { ErrorMessage, Field} from "formik";

const TextField = (
 {
    label,
    idAndName,
    type,
    placeholder
    , styles,
    messageStyles
    , fieldStyles,
    labelStyles,
...rest
}: IInputFiledProps ) => 

   <>
        <label className={` ${labelStyles}`}>
            <span>  {label} </span></label>
        <div>

            <Field
                type={`${type ? type : 'text'}`}
                name={idAndName}
                className={`px-5 p-2 rounded-md  ${fieldStyles}`}
                placeholder={placeholder || label}

                {...rest}
            />
            <ErrorMessage component={'div'} name={idAndName} className={`text-red-500 p-5 ${messageStyles}`} />


        </div>
    </>


export default TextField;