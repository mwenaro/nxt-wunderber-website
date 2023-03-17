export interface IInputFiledProps {
  label?: string;
  placeholder?: string;
  idAndName: string;
  type?: IInputFieldType;

  styles?: string;
  fieldStyles?: string;
  labelStyles?: string;
  messageStyles?: string;
  required?: "required";
  value?: any;
  min?: number;
  max?: number;
  options?: IRadioCheckboxOption[];
}
export type IInputFieldType =
  | "text"
  | "radio"
  | "checkbox"
  | "select"
  | "number"
  | "date"
  | "tel"
  | "textarea"
  | "email"
  | "year"
  | "password";

export type IRadioCheckboxOption = { label: string; value: string | number };

export interface IBookingForm {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  departureDate: string;
  safariType: string;
  safariDuration: string;
  participants?: { kids?: number; adults?: number; infants?: number };
  accommodationLevel?: string;
  otherServices?: string[];
  specialInterests: string;
  status?: string;
  id?: string;
  userId?: string;
}

export interface IFormField {
  label?: string;
  type: IInputFieldType;
  idAndName: string;
  placeholder?: string;
}
