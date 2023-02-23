export interface IImage{
    src:string;
    des:string;
}

export interface IInputFiledProps {
    label:string
    placeholder?:string
    idAndName:string
    type ?: 'text'|'radio'|'checkbox'|'select'|'number'|'date'|'tel'|'email'
    styles? : string
    fieldStyles?:string
    labelStyles?:string
    messageStyles?:string
    value?:any
    options?:IRadioCheckboxOption[]
}


export type IRadioCheckboxOption ={label:string, value:string|number}

export interface IBookingForm {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    departureDate: string;
    safariType: string;
    safariDuration: string;
    accommodationLevel: string;
    otherServices: string[];
    specialInterests: string;
  }

  export type IGuest = IBookingForm & {
    _id?:string|any
  }|{}