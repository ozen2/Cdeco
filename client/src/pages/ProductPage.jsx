import { useLoaderData } from "react-router-dom";
import ReturnLink from "../components/ReturnLink";

function ProductPage() {
    const productData = useLoaderData();

  return(
    <main>
        <ReturnLink source="/productsList" margin_left="ml-6 mt-8 mb-10" />
      <article className="flex flex-col gap-4 mt-4 md:flex-row">
        <img className="mx-4 md:mx-6 rounded-md md:w-96" src={`${import.meta.env.VITE_API_URL}/${productData.picture}`} alt={productData.name} />
        <ul className="flex flex-col gap-8">
          <li>
            <h1 className="ml-4">{productData.name}</h1>
          </li>
          <li className="ml-4 opacity-90 font-medium text-[var(--tertiary-color)] text-md">
            Matériaux : {productData.materials}
          </li>
          <li className="ml-4 opacity-90 font-medium text-[var(--tertiary-color)] text-md">
            Dimensions : {productData.dimensions}
          </li>
          <li className="ml-4 font-medium text-md">
            Prix : {productData.price}€
          </li>
          <li className="ml-4 max-w-prose font-medium text-md leading-loose">
            Description : {productData.details}
          </li>
          <button className="self-start mt-6 ml-4 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition-all ease-in-out duration-200 text-white rounded-md p-2">Commander</button>
        </ul>
      </article>
    </main>
  );
}

export default ProductPage;
