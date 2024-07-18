export async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export default async function sendProduct(url, product, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      body: product,
    });
    return response.json();
  } catch (err) {
    return err;
  }
}
