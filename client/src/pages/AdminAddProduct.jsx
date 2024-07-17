import InputAdd from "../components/InputAdd";
import useLogicForm from "../services/useLogicForm";

function AdminAddProduct() {
  const { formData, handleChange, handleSubmitProduct, handleImageChange } = useLogicForm();

  return (
    <main className="flex flex-col gap-10 min-h-screen">
      <h1 className="text-center text-3xl md:text-6xl">Ajoutez votre produit</h1>
      <form
        id="addProduct"
        method="POST"
        className="flex flex-col gap-10 items-center"
        onSubmit={handleSubmitProduct}
      >
        <InputAdd
          handleChange={handleChange}
          value={formData.name}
          id="name"
          label="Nom de l'article"
          type="text"
          name="name"
          placeholder="Entrez le nom de l'article..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.details}
          id="details"
          label="Description"
          type="textarea"
          name="details"
          placeholder="Entrez votre description..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.dimensions}
          id="dimensions"
          label="Dimensions de l'objet"
          type="text"
          name="dimensions"
          placeholder="Entrez les dimensions de l'objet..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.materials}
          id="materials"
          label="Matériaux utilisés"
          type="text"
          name="materials"
          placeholder="Entrez les matériaux utilisés..."
        />
        <InputAdd
          handleChange={handleChange}
          value={formData.price}
          id="price"
          label="Prix"
          type="number"
          name="price"
          placeholder="Entrez le prix..."
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
        <button className="mb-10" type="submit">
          ok
        </button>
      </form>
    </main>
  );
}

export default AdminAddProduct;
