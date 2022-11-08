import React from 'react';
import './cargarProducto.scss';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProducts } from '../../redux/actions/index';
import swal from 'sweetalert';

function Cargarproducto() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    published: '',
    imageUrl: '',
    description: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const crear = {
      name: input.name,
      price: input.price,
      category: input.category,
      stock: input.stock,
      published: input.published,
      imageUrl: input.imageUrl,
      description: input.description,
    };
    dispatch(postProducts(crear));
    setInput({
      name: '',
      price: '',
      category: '',
      stock: '',
      published: '',
      imageUrl: '',
      description: '',
    });
    // alert('Producto Publicado!');
    swal('el producto fue creado exitosamente!', {
      buttons: false,
      icon: 'success',
      timer: 3000,
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='texto'>
      <h1>Carga un nuevo producto</h1>

      <div className='contieneTodo'>
        <div className='input-container'>
          <div className='name'>
            {/* <h3>Name</h3> */}
            <input
              placeholder='nombre'
              type='name'
              name='name'
              id='name'
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='content-price'>
            {/* <h3>Price</h3> */}
            <input
              placeholder='precio'
              type='number'
              name='price'
              id='price'
              min={0}
              value={input.price}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            {/* <h3>Category</h3> */}
            <input
              placeholder='categoria'
              type='text'
              name='category'
              id='category'
              value={input.category}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='stock'>
            {/* <h3>Stock</h3> */}
            <input
              placeholder='stock'
              type='number'
              name='stock'
              id='stock'
              value={input.stock}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className='input-container'>
          <div className='published'>
            {/* <h3>Published</h3> */}
            <input
              placeholder='published'
              type='text'
              name='published'
              id='published'
              value={input.published}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='imageUrl'>
            {/* <h3>Image URL</h3> */}
            <input
              placeholder='image url'
              type='text'
              name='imageUrl'
              id='imageUrl'
              value={input.imageUrl}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='description'>
            {/* <h3>Description</h3> */}
            <input
              placeholder='descripcion'
              type='text'
              name='description'
              id='description'
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <button type='submit' onClick={(e) => handleSubmit(e)}>
        {' '}
        Crear Producto{' '}
      </button>
    </div>
  );
}

export default Cargarproducto;
