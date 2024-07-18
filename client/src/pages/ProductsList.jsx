import { Link, useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData()

  return (
    <main className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:gap-10">
      {products.map((product) => (
        <section class="md:mx-6 mt-20 flex w-72 md:w-96 flex-col rounded-xl bg-white bg-clip-border shadow-md">
          <img
            src={`${import.meta.env.VITE_API_URL}/${product.picture}`}
            class="mx-4 -mt-6 h-56 md:h-80 overflow-hidden object-cover object-bottom rounded-xl shadow-lg"
          />
          <ul class="p-6">
            <li class="mb-2 block font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-[var(--tertiary-color)]">
              {product.name}
            </li>
            <li class="line-clamp-3 block text-base font-light leading-relaxed">
              {product.details}
            </li>
            <li className="mt-4 text-base font-semibold">
              {product.price}€
            </li>
            <li className="mt-8 mb-4">
              <Link
                to={`/product/${product.id}`}
                type="button"
                class="rounded-lg hover:bg-[var(--secondary-color)] transition-all ease-in-out bg-[var(--primary-color)] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white opacity-100"
              >
                Plus de détails
              </Link>
            </li>
          </ul>
        </section>
      ))}
    </main>
  );
}

export default ProductsList;
