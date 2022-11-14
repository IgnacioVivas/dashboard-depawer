import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import ProductsList from './productsList/ProductsList';

function ProductsListContainer() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProductsList products={products} getProducts={getProducts} />
    </>
  );
}

export default ProductsListContainer;
