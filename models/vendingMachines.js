module.exports = function (sequelize, DataTypes) {
    var VendingMachines = sequelize.define("VendingMachines", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        numberOfDrinkMachines: {
            type: DataTypes.INTERGER,
            allowNull: false,
            defaultValue: 0
        },
        numberOfSnackMachines: {
            type: DataTypes.INTERGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    VendingMachines.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        VendingMachines.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return VendingMachines;
};