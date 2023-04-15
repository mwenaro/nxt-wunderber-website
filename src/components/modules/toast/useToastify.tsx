import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IToastSettings {
  class?: string;
  position?: string;
}
export default function useToastify() {
  const _Toast = (cb: any, msg: string, settings: IToastSettings = {}) =>
    cb(msg, settings);
  const successToast = (msg: string, settings: IToastSettings = {}) =>
    _Toast(toast.success, msg, settings);
  const errorToast = (msg: string, settings: IToastSettings = {}) =>
    _Toast(toast.error, msg, settings);

  return {
    successToast,
    errorToast,
    ToastContainer,
  };
}
