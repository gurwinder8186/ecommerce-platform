import request from 'superagent';

export async function fetchCategories() {
  try {
    const res = await request.get('/api/v1/categories');
    return res.body; 
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error; 
  }
}

export async function addCategory(category: { name: string; description?: string }) {
  const response = await request.post('/api/v1/categories').send(category);
  return response.body;
}

export async function deleteCategoryById(id: number) {
  try {
    const response = await request.delete(`/api/v1/categories/${id}`);
    return response.body; 
  } catch (error) {
    console.error(`Error deleting category with ID ${id}`, error);
    throw error;
  }
}

export async function updateCategory(category: { id: number; name: string; description?: string }) {
  const { id, ...payload } = category;
  try {
    const res = await request.put(`/api/v1/categories/${id}`).send(payload); 
    return res.body;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
}