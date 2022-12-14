import './cargarProducto.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProducts } from '../../redux/actions/index';
import swal from 'sweetalert';

function Cargarproducto() {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState();
  function showUploadWidget() {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dyg5hutpb',
        uploadPreset: 'ejemplo',
        sources: ['local', 'url'],
        googleApiKey: '<image_search_google_api_key>',
        showAdvancedOptions: true,
        //  multiple: false, debe ser eliminado para que funcione bien
        //  cropping: true, esta tambien
        defaultSource: 'local',
        styles: {
          palette: {
            window: '#ffffff',
            sourceBg: '#f4f4f5',
            windowBorder: '#C5D21D',
            tabIcon: '#000000',
            inactiveTabIcon: '#555a5f',
            menuIcons: '#555a5f',
            link: '#C5D21D',
            action: '#414141',
            inProgress: '#000519',
            complete: '#414141',
            error: '#cc0000',
            textDark: '#000000',
            textLight: '#fcfffd',
          },
          fonts: {
            default: null,
            "'Acme', sans-serif": {
              url: 'https://fonts.googleapis.com/css?family=Acme',
              active: true,
            },
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info.secure_url);
          setImageUrl(result.info.secure_url);
        } else if (error) {
          console.log('parece que hubo un error: ', error);
        }
      }
    );
  }

  const [input, setInput] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    published: '',
    image: '',
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
      image: imageUrl,
      description: input.description,
    };
    dispatch(postProducts(crear));
    setInput({
      name: '',
      price: '',
      category: '',
      stock: '',
      published: '',
      image: '',
      description: '',
    });
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
            <input
              className='camposInput'
              placeholder='nombre'
              type='name'
              name='name'
              id='name'
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='content-price'>
            <input
              className='camposInput'
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
            <input
              className='camposInput'
              placeholder='categoria'
              type='text'
              name='category'
              id='category'
              value={input.category}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='stock'>
            <input
              className='camposInput'
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
            <input
              className='camposInput'
              placeholder='published'
              type='text'
              name='published'
              id='published'
              value={input.published}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='imageUrl'>
            <button className='camposInput' id='upload_widget' onClick={() => showUploadWidget()}>
              upload images
            </button>
            {/* <img src={image} alt='' /> */}
          </div>

          <div className='description'>
            <textarea
              className='camposInput'
              placeholder='descripcion'
              type='text-area'
              name='description'
              id='description'
              value={input.description}
              onChange={(e) => handleChange(e)}
              rows='7'
            ></textarea>
          </div>
        </div>
      </div>

      <button className='btn' type='submit' onClick={(e) => handleSubmit(e)}>
        {' '}
        Crear Producto{' '}
      </button>
    </div>
  );
}

export default Cargarproducto;
