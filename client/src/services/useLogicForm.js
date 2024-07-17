import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    materials: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const productsUrl = "/api/products/add";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await sendProduct(productsUrl, formData, "POST");
      const data = await response.json();
      navigate("/");
      return data;
    } catch (err) {
      return err;
    }
  };
  return {
    formData,
    handleChange,
    handleSubmitProduct,
  };
};

export default useLogicForm;