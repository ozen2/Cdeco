import { useParams } from "react-router-dom";
import deleteProductFetch from "./deleteFetch";

const deleteProduct = () => {
  const { id } = useParams();
  const deleteProductUrl = `/api/products/delete/${id}`;

  const handleDelete = async () => {
    try {
      const response = await deleteProductFetch(deleteProductUrl, "DELETE");
      return response;
    } catch (err) {
      return err;
    }
  };
  return handleDelete;
}

export default deleteProduct;