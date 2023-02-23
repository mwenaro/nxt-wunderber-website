"use client"

import { IInputFiledProps } from "@/types"
import { ReactNode } from "react"
import InputFieldContainer from "./InputFieldContainer"

import RadioCheckInput from "./RadioCheckInput"
import SelectField from "./SelectField"
import TextField from "./TextField"


const InputField = ({styles = "", type = "text",children, ...otherProps}: IInputFiledProps & {children?:ReactNode}) => {

    
   switch(type){

    case 'radio':
        return <InputFieldContainer styles={styles}><RadioCheckInput type={type} {...otherProps} /></InputFieldContainer>
    case 'checkbox':
      return <InputFieldContainer styles={styles}><RadioCheckInput type={type} {...otherProps} /></InputFieldContainer>
   case 'select':
  
        return <InputFieldContainer styles={styles}> <SelectField type= {type} {...otherProps} >{children}</SelectField></InputFieldContainer>

    
    }

    return <InputFieldContainer styles={styles}>  <TextField type= {type} {...otherProps} /> </InputFieldContainer>
     
}
  
  export default InputField;
  