import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IToastSettings {
  class?: string;
  position?: string;
}
// export default function useToastify() {
  const _Toast = (cb: any, msg: string, settings: IToastSettings = {}) =>
    cb(msg, settings);
export   const successToast = (msg: string, settings: IToastSettings = {}) =>
    _Toast(toast.success, msg, settings);
  export const errorToast = (msg: string, settings: IToastSettings = {}) =>
    _Toast(toast.error, msg, settings);

//   return {
//     successToast,
//     errorToast,
//     ToastContainer,
//   };
// // }

export {ToastContainer as ToastContainer} from 'react-toastify'



