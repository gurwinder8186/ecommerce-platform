import connection from './connection';

export async function addProduct(product) {
  try {
    const [newProduct] = await connection('products')
      .insert(product)
      .returning('*');
    return newProduct;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

export async function getProductsByCategory(categoryId: number) {
  try {
    const products = await connection('products')
      .where('category_id', categoryId)
      .select('*');
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
