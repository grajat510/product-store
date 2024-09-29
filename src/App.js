import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import PaginationLoader from './components/PaginationLoader';
import { fetchProducts } from './redux/productsSlice';

const App = () => {
  const dispatch = useDispatch();
  const { products, loading, error, currentPage, totalPages } = useSelector(state => state.products);
  const selectedCategory = useSelector(state => state.category.selectedCategory);

  useEffect(() => {
    // Fetch products when the component mounts or when the category changes
    dispatch(fetchProducts({ category: selectedCategory, page: currentPage }));
  }, [dispatch, selectedCategory, currentPage]);

  return (
    <div className="App">
      <h1>Product Showcase</h1>
      <div className="container">
        <CategoryList />
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error fetching products</h2>}
        {!loading && !error && <ProductList products={products} />}
        <PaginationLoader currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default App;
