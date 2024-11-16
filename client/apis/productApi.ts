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