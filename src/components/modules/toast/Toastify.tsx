import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IToastSettings {
  className?: string;
  position?: string;
  autoClose?: number
}

const default_settings ={
  className: 'content-fit',
  // position: toast.POSITION.TOP_RIGHT,
  position: toast.POSITION.TOP_CENTER,
  autoClose: 60000,
}
// export default function useToastify() {
  const _Toast = (cb: any, msg: string, settings: IToastSettings = default_settings) =>
    cb(msg, settings);
export   const successToast = (msg: string, settings: IToastSettings = default_settings) =>
    _Toast(toast.success, msg, settings);
  export const errorToast = (msg: string, settings: IToastSettings = default_settings) =>
    _Toast(toast.error, msg, settings);

//   return {
//     successToast,
//     errorToast,
//     ToastContainer,
//   };
// // }

export {ToastContainer as ToastContainer} from 'react-toastify'



