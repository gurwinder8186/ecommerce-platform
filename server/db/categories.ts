import connection from './connection.ts'
import { Category } from '../../models/Category.ts'

export async function getAllCategories(): Promise<Category[]> {
  return await connection('categories').select('*')
}

