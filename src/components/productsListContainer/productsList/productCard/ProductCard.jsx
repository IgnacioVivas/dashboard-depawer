import axios from 'axios';
import React, { useState } from 'react';
import EditProduct from '../../../editProduct/EditProduct';
import './productCard.scss';
import swal from 'sweetalert';

function ProductCard({ product, getProducts }) {
  const [modal, setModal] = useState(false);

  const deleteProduct = async () => {
    try {
      const { data } = await axios.delete(
        `https://dpower-production.up.railway.app/products/${product.id}`
      );
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteSwal = async () => {
    swal({
      title: 'Estas seguro?',
      text: '¡ Una vez eliminado, no podrá recuperar este producto!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('¡Puf! ¡Tu producto ha sido eliminado!', {
          icon: 'success',
        });
        deleteProduct();
      } else {
        swal('¡Tu archivo imaginario está a salvo!');
      }
    });
  };

  return (
    <>
      <div className='celda-container'>
        <div className='celda'>
          <span>{product?.name}</span>
        </div>
        <div className='celda'>
          <i className='ri-edit-2-line' onClick={() => setModal(!modal)}></i>
          <i className='ri-delete-bin-line' onClick={deleteSwal}></i>
        </div>
      </div>
      {modal && (
        <div className='containerPanelEdit' id='iconEdit'>
          <EditProduct product={product} modal={modal} setModal={setModal} />
        </div>
      )}
    </>
  );
}

export default ProductCard;
