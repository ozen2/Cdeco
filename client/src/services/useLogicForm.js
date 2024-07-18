import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sendProduct from "./fetchApi";

const useLogicForm = () => {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    materials: "",
    dimensions: "",
    price: null,
  });

  const navigate = useNavigate();

  const productsUrl = "/api/products/add";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (image) {
      formDataToSend.append("picture", image);
    }

    try {
      const response = await sendProduct(productsUrl, formDataToSend, "POST");
      navigate("/");
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  return {
    formData,
    handleChange,
    handleImageChange,
    handleSubmitProduct,
  };
};

export default useLogicForm;