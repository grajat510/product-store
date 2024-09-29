import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/categorySlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = ['smartphones', 'laptops', 'fragrances', 'skincare']; // Example categories
  const selectedCategory = useSelector(state => state.category.selectedCategory);

  return (
    <div>
      <h3>Select Category</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => dispatch(setCategory(category))}
            style={{ cursor: 'pointer', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
