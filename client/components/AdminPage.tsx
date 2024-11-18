import { useCategories } from '../hooks/useCategories';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';

function AdminPage() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error fetching categories.</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddCategory />
      {categories && <DeleteCategory categories={categories} />}
    </div>
  );
}

export default AdminPage;