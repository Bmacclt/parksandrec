module.exports = function (sequelize, DataTypes) {
    var Trails = sequelize.define("Trails", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        numberOfTrails: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        avgLength: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Trails.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Trails.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Trails;
};