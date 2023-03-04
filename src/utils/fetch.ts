export const postFormData = async (
  path: string,
  postData: any,
  method: string = "POST"
) => {
  const result: { error: string; data: unknown } = { error: "", data: null };
  try {
    const data = await (
      await fetch(path, { method, body: JSON.stringify(postData) })
    ).json();
    return { ...result, data };
  } catch (error: any) {
    return { ...result, error: error.message };
  }
};

export const getData = async (path: string) => {
  const result: { error: string; data: unknown } = { error: "", data: null };
  try {
    const data = await (await fetch(path)).json();
    return { ...result, data };
  } catch (error: any) {
    return { ...result, error: error.message };
  }
};
