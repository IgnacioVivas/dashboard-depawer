import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProducts, editProduct } from '../../redux/actions/index';
import swal from 'sweetalert';
import './editProduct.scss';

function EditProduct({ product, modal, setModal }) {
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
          if (result.info.secure_url === null) {
            setImageUrl(product.image);
          } else {
            setImageUrl(result.info.secure_url);
          }
        } else if (error) {
          console.log('parece que hubo un error: ', error);
        }
      }
    );
  }
  const validate = (inputValue) => {
    let errors = {};
    if (!inputValue.name) errors.name = 'el nombre es requerido';
    if (!inputValue.price) errors.price = 'el precio es requerido';
    if (!inputValue.category) errors.category = 'la categoria es requerida';
    if (!inputValue.stock) errors.stock = 'el stock es requerido';
    if (!inputValue.published) errors.published = 'published es requerido';
    if (!inputValue.image) errors.image = 'la imagen es requerida';
    if (!inputValue.description) errors.description = 'la descripcion es requerida';
    return errors;
  };
  console.log(product.image);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    stock: product.stock,
    published: product.published,
    image: product.image,
    description: product.description,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formValues = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setErrors(validate(formValues));
    const editar = {
      name: input.name,
      price: input.price,
      category: input.category,
      stock: input.stock,
      published: input.published,
      image: product.image,
      description: input.description,
    };
    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(editProduct(editar, product.id));

      setInput({
        name: '',
        price: '',
        category: '',
        stock: '',
        published: '',
        image: '',
        description: '',
      });
      swal('el producto fue editado exitosamente!', {
        buttons: false,
        icon: 'success',
        timer: 3000,
      });
      setModal(!modal);
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div id='panelEditContainer'>
      <i className='ri-close-fill closeEdit' onClick={() => setModal(!modal)}></i>
      <h2 id='titleEdit'>Edita el producto: {product.name}</h2>
      <div className='formularioEdit'>
        <div className='separador'>
          <div className='name'>
            <input
              className={`camposInput  ${errors.name && 'danger'}`}
              placeholder='nombre'
              type='name'
              name='name'
              id='name'
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className='danger'>{errors.name}</p>}
          </div>
          <div className='content-price'>
            <input
              className={`camposInput  ${errors.name && 'danger'}`}
              placeholder='precio'
              type='number'
              name='price'
              id='price'
              min={0}
              value={input.price}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className='danger'>{errors.name}</p>}
          </div>
          <div>
            <input
              className={`camposInput  ${errors.category && 'danger'}`}
              placeholder='categoria'
              type='text'
              name='category'
              id='category'
              value={input.category}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className='danger'>{errors.category}</p>}
          </div>
          <div className='stock'>
            <input
              className={`camposInput  ${errors.stock && 'danger'}`}
              placeholder='stock'
              type='number'
              name='stock'
              id='stock'
              value={input.stock}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className='danger'>{errors.stock}</p>}
          </div>
        </div>
        <div className='separador'>
          <div className='published'>
            <input
              className={`camposInput  ${errors.published && 'danger'}`}
              placeholder='published'
              type='text'
              name='published'
              id='published'
              value={input.published}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className='danger'>{errors.published}</p>}
          </div>
          {/* <div className='imageUrl'>
            <button
              className={`camposInput  ${errors.image && 'danger'}`}
              id='upload_widget'
              onClick={() => showUploadWidget()}
              name='image'
              value={input.image}
            >
              upload images
            </button>
            <img src={image} alt='' />
            {errors.name && <p className='danger'>{errors.image}</p>}
          </div> */}
          <div className='description'>
            <textarea
              className={`camposInput  ${errors.description && 'danger'}`}
              placeholder='descripcion'
              type='text-area'
              name='description'
              id='description'
              value={input.description}
              onChange={(e) => handleChange(e)}
              rows='11'
            ></textarea>
            {errors.name && <p className='danger'>{errors.description}</p>}
          </div>
        </div>
      </div>
      <button className='btn-edit' type='submit' onClick={(e) => handleSubmit(e)}>
        Editar Producto
      </button>
    </div>
  );
}

export default EditProduct;
