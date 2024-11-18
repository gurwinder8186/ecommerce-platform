export async function seed(knex) {
  await knex('categories').del();
  await knex('categories').insert([
    { name: 'Desktop PCs', description: 'High-performance desktop computers' },
    { name: 'Laptops', description: 'Portable and efficient laptops' },
    { name: 'Phones', description: 'Smartphones of all kinds' },
    { name: 'Tablets', description: 'Versatile tablets for work and entertainment' },
    { name: 'Phone Accessories', description: 'Cases, chargers, and other accessories for smartphones' },
    { name: 'Computer Accessories', description: 'Keyboards, mice, and other peripherals' },
    { name: 'Monitors', description: 'High-quality displays for work and gaming' },
    { name: 'Headphones', description: 'Premium headphones for music and gaming' },
    { name: 'Cables', description: 'USB, HDMI, and other essential cables' },
    { name: 'Storage Devices', description: 'External drives, SSDs, and flash drives' },
  ]);
}
