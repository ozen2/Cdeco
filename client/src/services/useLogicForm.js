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
    price: 0,
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
      formDataToSend.append("image", image);
    }

    // Convert FormData to an object for logging
    const formDataObject = Object.fromEntries(formDataToSend.entries());
    console.log(formDataObject);

    try {
      const response = await sendProduct(productsUrl, formDataToSend, "POST");
      console.log(response);
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
    handleImageChange,
    handleSubmitProduct,
  };
};

export default useLogicForm;