import { useState } from 'react';
import { useCategories, useAddCategory } from '../hooks/useCategories';
import { Category } from '../../models/Category';
import { Link } from 'react-router-dom';

function Categories() {
  const { data: categories, isLoading, isError } = useCategories();
  const addCategory = useAddCategory();

  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleAddCategory = () => {
    addCategory.mutate(newCategory, {
      onSuccess: () => {
        setNewCategory({ name: '', description: '' }); 
      },
    });
  };

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error fetching categories.</p>;

  return (
    <div>
      <aside>
        <h3> Shop by Departments</h3>
      <ul>
        {categories?.map((category: Category) => (
          <Link key={category.name} to={category.name}>
          <li>{category.name}</li>
        </Link>
        ))}
      </ul>
      </aside>
      <div>
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Name"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
}

export default Categories;
