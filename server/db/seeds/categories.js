export async function seed(knex) {
  await knex('categories').del();
  await knex('categories').insert([
    { name: 'Desktop PCs', description: 'High-performance desktop computers' },
    { name: 'Laptops', description: 'Portable and efficient laptops' },
    { name: 'Phones', description: 'Smartphones of all kinds' },
  ]);
}
