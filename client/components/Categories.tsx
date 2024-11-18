import { useCategories } from '../hooks/useCategories';
import { Category } from '../../models/Category';
import { Link } from 'react-router-dom';

function Categories() {
  
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error fetching categories.</p>;

  return (
    <div>
      <aside>
        <h3> Shop by Departments</h3>
      <ul>
        {categories?.map((category: Category) => (
          <Link key={category.name} to={category.name}>
          <li className='categories'>{category.name}</li>
        </Link>
        ))}
      </ul>
      </aside>
      </div>
  );
}

export default Categories;
