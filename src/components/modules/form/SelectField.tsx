"use client"
import { IInputFiledProps } from "@/types";
import { ErrorMessage, Field} from "formik";
import { ReactNode } from "react";

const SelectField = (
 {
    label,
    idAndName,   
    messageStyles
    , fieldStyles,
    labelStyles,
    children,
    options = [],
...rest
}: IInputFiledProps & {children:ReactNode} ) => 

   <>
        <label className={` ${labelStyles}`}>
            <span>  {label} </span></label>
        <div>

            <Field as ="select"
                type="select"
                name={idAndName}
                className={`px-5 p-2 rounded-md form-select w-full ${fieldStyles}`}
                
                {...rest}
            >
            {options.length>0?

            options.map(({label,value})=><option key ={value} value={value}>{label}</option>)
            :
            children
            }
            </Field>
            <ErrorMessage component={'div'} name={idAndName} className={`text-red-500 p-5 ${messageStyles}`} />


        </div>
    </>


export default SelectField;