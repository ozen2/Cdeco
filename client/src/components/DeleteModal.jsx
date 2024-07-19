import PropTypes from "prop-types";
import deleteProduct from "../services/deleteProduct";

import { useNavigate } from "react-router-dom";

function DeleteModal({ className, handleChangeModal }) {
  const handleDelete = deleteProduct();
  const navigate = useNavigate();

  const handleClick = () => {
    handleDelete();
    navigate("/admin/productsList");
  };

  return (
    <section className={className}>
      <h2 className="text-2xl font-semibold text-center text-white mb-5">
        Voulez vous vraiment supprimer ce produit ?
      </h2>
      <ul className="flex justify-center gap-4">
        <li>
          <button className="bg-red-800 text-white w-20 h-10 rounded-lg" onClick={handleClick}>Oui</button>
        </li>
        <li>
          <button className="bg-[var(--primary-color)] text-white w-20 h-10 rounded-lg" onClick={handleChangeModal}>Non</button>
        </li>
      </ul>
    </section>
  );
}

DeleteModal.propTypes = {
  claseName: PropTypes.string.isRequired,
  handleChangeModal: PropTypes.func.isRequired,
};

export default DeleteModal;
