// In seeds/YYYYMMDDHHMMSS_desktop_pcs_seed.js

export async function seed(knex) {
  await knex('desktop_pcs').del();
  await knex('desktop_pcs').insert([
    { 
      name: 'Gaming Desktop PC', 
      description: 'High-performance PC for gaming',
      price: 1500.00,
      image_url: 'http://example.com/gaming-desktop.jpg',
      processor: 'Intel i7',
      ram: '16GB',
      storage: '1TB SSD',
      os: 'Windows 10',
    },
    {
      name: 'Workstation Desktop',
      description: 'Professional desktop for workstations',
      price: 2000.00,
      image_url: 'http://example.com/workstation-desktop.jpg',
      processor: 'Intel Xeon',
      ram: '32GB',
      storage: '2TB SSD',
      os: 'Windows 10 Pro',
    },
  ]);
}
