import { useState } from 'react';
import { useAddCategory } from '../hooks/useCategories'; 

const AdminPage = () => {
  const addCategory = useAddCategory();
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleAddCategory = () => {
    addCategory.mutate(newCategory, {
      onSuccess: () => {
        setNewCategory({ name: '', description: '' });
      },
    });
  };

  return (
    <div>
      <h2>Add New Category</h2>
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
  );
};

export default AdminPage;
