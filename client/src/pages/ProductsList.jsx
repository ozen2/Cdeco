import { Link, useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData();

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      {products.map((product) => (
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
          <Link to={`/product/${product.id}`}>Détails</Link>
        </section>
      ))}
    </main>
  );
}

export default ProductsList;