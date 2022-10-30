'use strict';
const { encryptPassword } = require('../service/authService')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
            firstName: "Azizbek",
            lastName: "berdimuratov",
            username: 'ceo',
            password: encryptPassword("shoamanay"),
            role: 'ceo'
        }], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};