module.exports = function (sequelize, DataTypes) {
    var Soccer = sequelize.define("Soccer", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        numberOfFields: {
            type: DataTypes.INTERGER,
            allowNull: false,
            defaultValue: 0
        },
    });

    Soccer.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Soccer.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Soccer;
};