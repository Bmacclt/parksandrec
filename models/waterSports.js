module.exports = function (sequelize, DataTypes) {
    var WaterSports = sequelize.define("WaterSports", {
        park_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        paddleBoats: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fishing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    WaterSports.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        WaterSports.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return WaterSports;
};