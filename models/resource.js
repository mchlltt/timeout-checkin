// Model for storing strategies that will be displayed to users
module.exports = function(sequelize, DataTypes) {
    var Resource = sequelize.define('Resource', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
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
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: 'Must be at least 1 character long'
                }
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                Resource.belongsTo(models.ResourceCategory);
                Resource.hasMany(models.Transaction)
            }
        }
    });
    return Resource;
};
