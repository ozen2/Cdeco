export default async function sendProduct(url, product, http) {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + url, {
        method: http,
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      return response.json();
    } catch (err) {
      return err;
    }
  }