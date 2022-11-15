import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import ProductsList from './productsList/ProductsList';

function ProductsListContainer() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const getProducts = () => {
    dispatch(getAllProducts());
  };
  useEffect(() => {
    getProducts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ProductsList
        products={products}
        currentProducts={currentProducts}
        getProducts={getProducts}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </>
  );
}

export default ProductsListContainer;
