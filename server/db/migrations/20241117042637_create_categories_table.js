export async function up(knex) {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
  });
}

export async function down(knex) {
  return knex.schema.dropTable('categories');
}
