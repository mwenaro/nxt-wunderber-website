"use client"
import { IInputFiledProps, IRadioCheckboxOption } from "./types";
import { ErrorMessage, Field} from "formik";

const RadioCheckInput = ({
    label,
    type ="checkbox",
    idAndName,
    options,
    styles,
    messageStyles
    , fieldStyles,
    labelStyles,
    ...rest
}: IInputFiledProps ) =>


    <>
        <label className={` ${labelStyles}`}>
            <span>  {label} </span></label>
            
        {options?.map(({ label, value }: IRadioCheckboxOption, index) =>
            <div className="px-3 flex flex-col sm:flex-row gap-3" key={index}>
               
                <Field
                    type={type}
                    value={value}
                   name={idAndName}
                    {...rest}
                   
                    className={`px-5 p-2 rounded-md form-${type} `}
                />
                 <label className={`pr-2 ${labelStyles}`}>
                    <span>  {label} </span></label>
            </div>)
        }
        <div>


            <ErrorMessage component={'div'} name={idAndName} className={`text-red-500 p-5 ${messageStyles}`} />


        </div>
    </>


export default RadioCheckInput;