import connection from './connection.ts'
import { Category } from '../../models/Category.ts'

export async function getAllCategories(): Promise<Category[]> {
  const check= await connection('categories').select()
  console.log(check);
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
