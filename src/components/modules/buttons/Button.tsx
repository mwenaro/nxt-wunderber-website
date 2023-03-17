export default function Button({children, type =undefined, styles}:{children:string, styles?:string, type?:undefined|'button'|'reset'|'submit'}) {
  return (
    <div className={`w-full object-contain flex flex-col justify-center items-center relative px-3`} >
          <button  type ={type} className={`p-5 btn w-full font-bold btn-primary text-white uppercase  ${styles??''}`}>{children}</button>
          </div>
  )
}
