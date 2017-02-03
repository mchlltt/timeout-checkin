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
                Transaction.hasOne(models.Feeling);
                Transaction.hasOne(models.Resource)
            }
        }
    });
    return Transaction;
};
