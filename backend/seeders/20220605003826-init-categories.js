'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('categories', [{
      name: 'Womens',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mens',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Childrens',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
