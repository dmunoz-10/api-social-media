import { QueryInterface } from 'sequelize'

export = {
  up: async (queryInterface: QueryInterface, Sequelize: any): Promise<void> => {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
        },

        lastName: {
          type: Sequelize.STRING,
        },

        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },

        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },

        // TIMESTAMP
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },

        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => queryInterface.addIndex('Users', ['email']))
  },

  down: (queryInterface: QueryInterface, Sequelize: any): Promise<void> => {
    return queryInterface.dropTable('Users')
  },
}
