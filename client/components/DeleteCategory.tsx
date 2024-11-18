import { useDeleteCategory } from '../hooks/useCategories.ts';
import { Category } from '../../models/Category.ts';

interface DeleteCategoryProps {
  categories: Category[];
}

function DeleteCategory({ categories }: DeleteCategoryProps) {
  const deleteCategory = useDeleteCategory();

  function handleDelete(id: number) {
    deleteCategory.mutate(id, {
      onSuccess: () => {
        console.log(`Category with ID ${id} deleted`);
      },
    });
  }

  return (
    <div>
      <h3>Delete Category</h3>
      <ul>
        {categories.map((category) => (
          <li className='categoryList' key={category.id}>
            <button className="deleteButton"  onClick={() => handleDelete(category.id)}> Delete</button>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteCategory;
