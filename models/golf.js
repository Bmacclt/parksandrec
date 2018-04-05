module.exports = function (sequelize, DataTypes) {
    var Golf = sequelize.define("Golf", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        numberOfHoles: {
            type: DataTypes.INTERGER,
            allowNull: false,
            defaultValue: false
        }
    });

    Golf.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Golf.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Golf;
};