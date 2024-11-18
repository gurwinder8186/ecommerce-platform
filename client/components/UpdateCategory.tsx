import { useState } from 'react';
import { useUpdateCategory } from '../hooks/useCategories';  // Adjust the import path as needed
import { Category } from '../../models/Category';

interface UpdateCategoryProps {
  categories: Category[];
}

function UpdateCategory({ categories }: UpdateCategoryProps) {
  const updateCategory = useUpdateCategory();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

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
      <h3>Update Category</h3>
      <ul>
        {categories.map((category) => (
          <li className="categoryList" key={category.id}>
            {category.name}{' '}
            <button
              className="editButton"
              onClick={() => handleSelectCategory(category)}
            >
              Edit
            </button>
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
          <button
            className="cancelButton"
            onClick={() => setSelectedCategory(null)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default UpdateCategory;
