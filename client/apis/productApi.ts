import request from 'superagent';

export async function fetchCategories() {
  try {
    const res = await request.get('/api/v1/categories');
    return res.body.categories; 
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error; 
  }
}

export async function addCategory(category: { name: string; description?: string }) {
  const response = await request.post('/api/v1/categories').send(category);
  return response.body;
}