module.exports = function (sequelize, DataTypes) {
    var Playground = sequelize.define("Playground", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        groundType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        swing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        slide: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sprayFountain: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Playground.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Playground.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Playground;
};