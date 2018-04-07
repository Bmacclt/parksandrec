module.exports = function (sequelize, DataTypes) {
    var BasketBall = sequelize.define("BasketBall", {
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

    BasketBall.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        BasketBall.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return BasketBall;
};