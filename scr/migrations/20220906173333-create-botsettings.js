'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('botsettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startHour: {
        type: Sequelize.INTEGER
      },
      endHour: {
        type: Sequelize.INTEGER
      },
      startMinute: {
        type: Sequelize.INTEGER
      },
      endMinute: {
        type: Sequelize.INTEGER
      },
      endMinute: {
        type: Sequelize.INTEGER
      },
      chat_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ChecksendMinut: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ChecksendHour: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('botsettings');
  }
};