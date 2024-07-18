import { useLoaderData, Link } from "react-router-dom";

function AdminProduct() {
  const productData = useLoaderData();

  return (
    <main>
      <img
        src={`${import.meta.env.VITE_API_URL}/${productData.picture}`}
        alt={productData.name}
      />
      <h1>{productData.name}</h1>
      <p>{productData.price}€</p>
      <p>{productData.dimensions}</p>
      <p>{productData.materials}</p>
      <p>{productData.details}</p>
      <Link to={`/admin/product/edit/${productData.id}`}>Modifier</Link>
      <button>Supprimer</button>
    </main>
  );
}

export default AdminProduct;
