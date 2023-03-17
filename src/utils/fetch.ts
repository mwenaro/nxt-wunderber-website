// export const postFormData = async (
//   path: string,
//   postData: any,
//   method: string = "POST"
// ) => {
//   const result: { error: string; data: unknown } = { error: "", data: null };
//   try {
//     const data = await (
//       await fetch(path, { method, body: JSON.stringify(postData) })
//     ).json();
//     return { ...result, data };
//   } catch (error: any) {
//     return { ...result, error: error.message };
//   }
// };

import { API } from "@/constants";

// export const getData = async (path: string) => {
//   const result: { error: string; data: unknown } = { error: "", data: null };
//   try {
//     const data = await (await fetch(path)).json();
//     return { ...result, data };
//   } catch (error: any) {
//     return { ...result, error: error.message };
//   }
// };
export const postFormData = async (
  path: string,
  postData: any,
  method: string = "POST"
) => fetch(`${API}${path}`, {method,body: JSON.stringify(postData)});

export const putData= async (
  path: string,
  postData: any,
  method: string = "PUT"
) => fetch(`${API}${path}`, {method,body: JSON.stringify(postData)});

export const deleteData= async (
  path: string,
    method: string = "DELETE"
) => fetch(`${API}${path}`, {method});


export const getData = async (
  path: string) => fetch(`${API}${path}`);
 

