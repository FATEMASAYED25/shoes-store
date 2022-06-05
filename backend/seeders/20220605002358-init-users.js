'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('users', [{
      username: 'admin',
      email: 'admin@email.com',
      role: 'admin',
      password: 'superadmin',
      first_name: 'test',
      last_name: 'admin',
      phone: '12345',
      address: 'address',
      city: 'city',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      username: 'user',
      email: 'user@email.com',
      role: 'user',
      password: 'superuser',
      first_name: 'test',
      last_name: 'user',
      phone: '12345',
      address: 'address',
      city: 'city',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
