import connection from './connection.ts'
import { Category } from '../../models/Category.ts'

export async function getAllCategories(): Promise<Category[]> {
  const check= await connection('categories').select()
  return check;

  
}

export async function addCategory(category: { name: string; description?: string }) {
  try {
    const newCategory = await connection('categories').insert(category).returning('*');
    
    return newCategory;
  } catch (error) {
    console.error('Error adding category to DB:', error);
    throw error;
  }
}

export async function deleteCategoryById(id: number): Promise<number> {
  try {
    const deletedCount = await connection('categories')
      .where('id', id)
      .del();

    return deletedCount; 
  } catch (error) {
    console.error('Error deleting category from DB:', error);
    throw error;
  }
}


export async function updateCategoryById(
  id: number,
  category: { name: string; description?: string }
): Promise<Category> {
  try {
    const [updatedCategory] = await connection('categories')
      .where('id', id)
      .update(category)
      .returning('*'); 
    return updatedCategory;
  } catch (error) {
    console.error('Error updating category in DB:', error);
    throw error;
  }
}