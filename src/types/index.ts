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
    required?:'required'
    value?:any
    min?:number
    max?:number
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
    participants?:{kids?:number, adults?:number, infants?:number}
    accommodationLevel?: string;
    otherServices?: string[];
    specialInterests: string;
   
  }

  export type IGuest = IBookingForm & {
    _id?:string|any
  }|{}