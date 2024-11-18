import { useCategories } from '../hooks/useCategories';
import AddCategory from './AddCategory';
import DesktopPCForm from './DesktopPCForm';
import AddDesktopPC from './DesktopPCForm';
import ManageCategory from './ManageCategory';

function AdminPage() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error fetching categories.</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddCategory />
      {categories && <ManageCategory categories={categories} />}
      <DesktopPCForm
  onSubmit={(desktopPC) => {
    console.log('Add Desktop PC:', desktopPC);
    // Call API or handle state update here
  }}
  
/>

         </div>
  );
}

export default AdminPage;