// The outer level of the feeling wheel
module.exports = function(sequelize, DataTypes) {
    var Feeling = sequelize.define('Feeling', {
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
        }
    }, {
        classMethods: {
            associate: function(models) {
                Feeling.belongsTo(models.FeelingCategory);
                Feeling.hasMany(models.Transaction)
            }
        }
    });
    return Feeling;
};
