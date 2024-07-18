export default async function deleteProductFetch(url, http) {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + url, {
        method: http,
      });
      return response.json();
    } catch (err) {
      return err;
    }
  }