module.exports = function (sequelize, DataTypes) {
    var WorkoutGear = sequelize.define("WorkoutGear", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        monkeyBars: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    WorkoutGear.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        WorkoutGear.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return WorkoutGear;
};