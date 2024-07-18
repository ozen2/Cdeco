import { useLoaderData, Link } from "react-router-dom"

function AdminProductsList() {
  const productsData = useLoaderData();
  return (
    <main>
      {productsData.map((product) => (
        <section key={product.id}>
          {product.picture && (
            <img
              src={`${import.meta.env.VITE_API_URL}/${product.picture}`}
              alt={product.name}
            />
          )}
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <p>{product.materials}</p>
          <p>{product.dimensions}</p>
          <p>{product.price}€</p>
          <Link to={`/admin/product/${product.id}`}>Détails</Link>
          <Link to={`/admin/product/edit/${product.id}`}>Modifier</Link>
          <button>Supprimer</button>
        </section>
      ))}
    </main>
  );
}

export default AdminProductsList;
