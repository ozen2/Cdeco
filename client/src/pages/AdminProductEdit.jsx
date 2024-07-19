import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import InputAdd from "../components/InputAdd";
import useLogicForm from "../services/useLogicForm";
import DeleteModal from "../components/DeleteModal";

function AdminProductEdit() {
  const productData = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeModal = () => {
    setModalOpen(!modalOpen);
  };

  const isModalOpen = modalOpen ? "block" : "hidden";

  const {
    handleChange,
    formData,
    setFormData,
    handleUpdateProduct,
    handleImageChange,
  } = useLogicForm();

  useEffect(() => {
    const { picture, path, ...rest } = productData;
    setFormData(rest);
  }, [productData]);

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
          handleChange={handleImageChange}
          value={formData.picture}
          id="picture"
          label="Image"
          type="file"
          name="picture"
          placeholder="Selectionnez une image..."
          accept="image/*"
        />
        <button className="bg-[var(--primary-color)] mb-4 text-white w-20 h-10 rounded-lg" type="submit">Modifier</button>
      </form>
      <div className="flex justify-center">
        <button className="bg-red-800 text-white w-20 h-10 rounded-lg" onClick={handleChangeModal}>Supprimer</button>
      </div>
      <DeleteModal className={`${isModalOpen} bg-[var(--tertiary-color)] fixed inset-0 flex flex-col w-3/5 h-64 items-center justify-around m-auto`} handleChangeModal={handleChangeModal} />
    </main>
  );
}

export default AdminProductEdit;
