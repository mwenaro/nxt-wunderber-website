export interface IImage{
    src:string;
    des:string;
}

export interface IInputFiledProps {
    label:string
    placeholder?:string
    idAndName:string
    type ?: 'text'|'radio'|'checkbox'|'select'|null|'number'|'date'|'tel'
    styles? : string
    fieldStyles?:string
    labelStyles?:string
    messageStyles?:''

}