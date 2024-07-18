import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import InputAdd from "../components/InputAdd";
import useLogicForm from "../services/useLogicForm";
import DeleteModal from "../components/DeleteModal";

function AdminProductEdit() {
  const productData = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const [imageBlob, setImageBlob] = useState(null);

  useEffect(() => {
    if (productData.path) {
      fetch(productData.path)
        .then((response) => response.blob())
        .then((blob) => {
          setImageBlob(blob);
        })
        .catch((error) => {
          console.error("Erreur lors de la conversion du chemin en blob:", error);
        });
    }
  }, [productData.path]);

  const handleChangeModal = () => {
    setModalOpen(!modalOpen);
  };

  const isModalOpen = modalOpen ? "block" : "hidden";

  const { handleChange, formData, setFormData, handleUpdateProduct, handlePathChange, path } =
    useLogicForm();

  useEffect(() => {
    setFormData(productData);
  }, [productData]);

  console.log(formData.path);
  return (
    <main>
      <form
        id="editProduct"
        method="PUT"
        className="flex flex-col gap-10 items-center"
        onSubmit={handleUpdateProduct}
      >
        <InputAdd
          handleChange={handleChange}
          value={formData.name}
          id="name"
          label="Nom"
          type="text"
          name="name"
          placeholder="Modifier le nom..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.details}
          id="details"
          label="Détails"
          type="text"
          name="details"
          placeholder="Modifier les détails..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.dimensions}
          id="dimensions"
          label="Dimensions"
          type="text"
          name="dimensions"
          placeholder="Modifier les dimensions..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.materials}
          id="materials"
          label="Matériaux"
          type="text"
          name="materials"
          placeholder="Modifier les matériaux..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.price}
          id="price"
          label="Prix"
          type="number"
          name="price"
          placeholder="Modifier le prix..."
        />
        <InputAdd
          handleChange={handlePathChange}
          value={path}
          id="path"
          label="Path"
          type="file"
          name="path"
          accept="image/*"
          placeholder="Modifier le path..."
        />
        <button type="submit">Modifier</button>
      </form>
      <button onClick={handleChangeModal}>Supprimer</button>
      <DeleteModal className={isModalOpen} />
    </main>
  );
}

export default AdminProductEdit;
