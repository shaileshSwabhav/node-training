'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      created_at: "",
      created_at: "",
      first_name: "firstname",
      last_name: "lastname",
      email: "email",
    },
    {
      first_name: "firstname",
      last_name: "lastname",
      email: "email",
    },{
      first_name: "firstname",
      last_name: "lastname",
      email: "email",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
