import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProducts } from '../../../redux/actions';
import ProductCard from './productCard/ProductCard';

function ProductsList({ products, getProducts }) {
  const dispatch = useDispatch();
  const { productsBackUp } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState('');
  const [hideSearchIcon, setHideSearchIcon] = useState(false);

  const resetSearch = () => setInputValue('');

  const doSearch = () => {
    dispatch(
      sortProducts(
        productsBackUp.filter((item) =>
          item?.name?.toLowerCase().includes(inputValue.toLowerCase())
        )
      )
    );
    setHideSearchIcon(true);
  };

  const clearSearch = () => {
    resetSearch();
    dispatch(sortProducts(productsBackUp));
    setHideSearchIcon(false);
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) doSearch();
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    e.target.value === '' && clearSearch();
  };
  return (
    <div className='dashboard-container'>
      <div className='search-container'>
        <h1>Todos los productos</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='search product'
            name='searchValue'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleOnKeyDown}
          />
          {hideSearchIcon ? (
            <i className='ri-close-line' onClick={clearSearch}></i>
          ) : (
            <i className='ri-search-line' onClick={doSearch}></i>
          )}
        </div>
      </div>
      <div className='users-container'>
        <div className='celda-container'>
          <div className='celda'>
            <span className='title-celda'>Productos</span>
          </div>
        </div>
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} getProducts={getProducts} />
        ))}
        {products && products.length === 0 && (
          <p className='messageSearch'>no se encontraron productos</p>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
