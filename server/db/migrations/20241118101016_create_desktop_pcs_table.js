export async function up(knex) {
  return knex.schema.createTable('desktop_pcs', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.string('image_url').notNullable();
    table.string('processor').notNullable();
    table.string('ram').notNullable();
    table.string('storage').notNullable();
    table.string('os').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable('desktop_pcs');
}
