
import { useState } from 'react';
import { useUpdateCategory, useDeleteCategory } from '../hooks/useCategories'; 
import { Category } from '../../models/Category';

interface ManageCategoryProps {
  categories: Category[];
}

function ManageCategory({ categories }: ManageCategoryProps) {
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  
  function handleDelete(id: number) {
    deleteCategory.mutate(id, {
      onSuccess: () => {
        console.log(`Category with ID ${id} deleted`);
      },
      onError: (error) => {
        console.error('Failed to delete category:', error);
      },
    });
  }

 
  function handleSelectCategory(category: Category) {
    setSelectedCategory(category);
    setUpdatedName(category.name);
    setUpdatedDescription(category.description || '');
  }

 
  function handleUpdate() {
    if (!selectedCategory) return;

    updateCategory.mutate(
      { id: selectedCategory.id, name: updatedName, description: updatedDescription },
      {
        onSuccess: () => {
          console.log(`Category with ID ${selectedCategory.id} updated`);
          setSelectedCategory(null);
          setUpdatedName('');
          setUpdatedDescription('');
        },
        onError: (error) => {
          console.error('Failed to update category:', error);
        },
      }
    );
  }

  return (
    <div>
      <h3>Manage Categories</h3>
      <ul>
        {categories.map((category) => (
          <li className="categoryList" key={category.id}>
            <button className="editButton" onClick={() => handleSelectCategory(category)}>
              Edit
            </button>{' '}
            <button className="deleteButton" onClick={() => handleDelete(category.id)}>
              Delete
            </button>
            <span>{category.name}</span>{' '}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="updateForm">
          <h4>Editing: {selectedCategory.name}</h4>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Category Name"
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            placeholder="Category Description"
          />
          <button className="updateButton" onClick={handleUpdate}>
            Update
          </button>
          <button className="cancelButton" onClick={() => setSelectedCategory(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default ManageCategory;