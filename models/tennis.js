module.exports = function (sequelize, DataTypes) {
    var Tennis = sequelize.define("Tennis", {
        parkName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        numberOfCourts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    Tennis.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Tennis.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Tennis;
};