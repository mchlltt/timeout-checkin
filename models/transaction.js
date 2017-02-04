var Sequelize = require('sequelize');

// Model for tracking transactions
module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define('Transaction', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        classMethods: {
            associate: function(models) {
                Transaction.belongsTo(models.Feeling);
                Transaction.belongsTo(models.Resource)
            }
        }
    });
    return Transaction;
};
