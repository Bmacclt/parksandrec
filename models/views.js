module.exports = function (sequelize, DataTypes) {
    var Views = sequelize.define("Views", {
        park_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        pond: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        waterfall: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        cliff: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Views.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Views.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Views;
};