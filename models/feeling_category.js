var Sequelize = require('sequelize');

// the mid level of the feelings wheel
module.exports = function(sequelize, DataTypes) {
    var FeelingCategory = sequelize.define('FeelingCategory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: 'Must be at least 1 character long'
                }
            }
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
                FeelingCategory.belongsTo(models.FeelingSuperCategory);
                FeelingCategory.hasMany(models.Feeling);
            }
        }
    });
    return FeelingCategory;
};
