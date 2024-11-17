import { useState } from 'react';
import { useCategories, useAddCategory } from '../hooks/useCategories';
import { Category } from '../../models/Category';

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
      <h1>Categories</h1>
      <ul>
        {categories?.map((category: Category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
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
