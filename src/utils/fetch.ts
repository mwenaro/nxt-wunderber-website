const headers = { 'Content-Type': 'application/json' }
export const getData = async (path: string, isFullPath:boolean = false) => await (await fetch(`${isFullPath? path : '/api/'+path}`)).json();
export const postFormData = async (
  path: string,
  postData: any,
  method: string = "POST"
) => fetch(`/api/${path}`, { method, body: JSON.stringify(postData) });

export const putData = async (
  path: string,
  postData: any,
  method: string = "PUT"
) => fetch(`/api/${path}`, {
  method, body: JSON.stringify(postData), headers: {
    "Content-Type": "application/json"
  }
});

export const deleteData = async (
  path: string,
  method: string = "DELETE"
) => fetch(`/api/${path}`, { method });

///--------------------------------------------------


export const getFromApi = async (path: string) => await (await fetch(`${process.env.NEXT_PUBLIC_NODE_API}${path}`)).json();


export const postToApi = async (
  path: string,
  postData: any,
  method: string = "POST"
) => await (await fetch(`${process.env.NEXT_PUBLIC_NODE_API}${path}`, { method, body: JSON.stringify(postData), headers })).json()

export const putToApi = async (
  path: string,
  postData: any,
  method: string = "PUT"
) => await (await fetch(`${process.env.NEXT_PUBLIC_NODE_API}${path}`, { method, body: JSON.stringify(postData), headers })).json()

export const deleteFromApi = async (
  path: string,
  method: string = "DELETE"
) => await (await fetch(`${process.env.NEXT_PUBLIC_NODE_API}${path}`, { method })).json()



