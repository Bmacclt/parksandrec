module.exports = function (sequelize, DataTypes) {
    var Trails = sequelize.define("Trails", {
        park_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        number_of_trails: {
            type: DataTypes.INTERGER,
            allowNull: false
        },
        avg_length: {
            type: DataTypes.INTERGER,
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