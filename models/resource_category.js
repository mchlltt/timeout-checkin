// Model for tracking categories chosen by the user
module.exports = function(sequelize, DataTypes) {
    var ResourceCategory = sequelize.define('ResourceCategory', {
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
                isIn: {
                    args: [['Distract', 'Inspire', 'Relax', 'Cope']],
                    msg: 'Must be Distract, Inspire, Relax, or Cope'
                }
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                ResourceCategory.hasMany(models.Resource)
            }
        }
    });
    return ResourceCategory;
};
