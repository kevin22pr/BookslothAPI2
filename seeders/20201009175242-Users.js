'use strict';

const getRandomUserId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const randomId = getRandomUserId(1, 99)
const randomId2 = getRandomUserId(1, 99)
const randomId3 = getRandomUserId(1, 99)
const randomId4 = getRandomUserId(1, 99)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      full_name: "Marie Emillie",
      avatar: `https://randomuser.me/api/portraits/women/${randomId}.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: "Jose Ramirez",
      avatar: `https://randomuser.me/api/portraits/men/${randomId2}.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: "Rebeca Linares",
      avatar: `https://randomuser.me/api/portraits/women/${randomId3}.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_name: "Grace Smith",
      avatar: `https://randomuser.me/api/portraits/women/${randomId4}.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
