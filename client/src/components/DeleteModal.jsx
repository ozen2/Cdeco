import PropTypes from 'prop-types';
import deleteProduct from "../services/deleteProduct";

function DeleteModal({className}) {

    const handleDelete = deleteProduct();

  return (
    <section className={className}>
        <h2>Voulez vous vraiment supprimer ce produit ?</h2>
        <div>
            <button onClick={handleDelete}>Oui</button>
            <button>Non</button>
        </div>
    </section>
  )
}

DeleteModal.propTypes = {
  claseName: PropTypes.string.isRequired,
};


export default DeleteModal