import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sendProduct from "./fetchApi";
import updateProductFetch from "./fetchApiUpadate";

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
  const { id } = useParams();
  const productsUrlEdit = `/api/products/edit/${id}`;

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

  const handlePathChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPath(e.target.files[0]);
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

    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
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

  const handleUpdateProduct = async (e) => {
    if (image) {
      e.preventDefault();

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      if (image) {
        formDataToSend.append("picture", image);
      }
      
      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      try {
        const response = await sendProduct(
          productsUrlEdit,
          formDataToSend,
          "PUT"
        );
        navigate("/admin/productsList");
        const data = await response.json();
        return data;
      } catch (err) {
        return err;
      }
    } else {
      e.preventDefault();

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      if (image) {
        formDataToSend.append("picture", image);
      }

      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      try {
        const response = await updateProductFetch(
          productsUrlEdit,
          formData,
          "PUT"
        );
        navigate("/admin/productsList");
        const data = await response.json();
        return data;
      } catch (err) {
        return err;
      }
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleImageChange,
    handleSubmitProduct,
    handleUpdateProduct,
  };
};

export default useLogicForm;
