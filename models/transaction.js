// Model for tracking transactions
module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define('Transaction', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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
