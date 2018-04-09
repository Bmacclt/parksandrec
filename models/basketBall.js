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
        // We're saying that BasketBall should belong to Park
        // A bball can't be created without a Park due to the foreign key constraint
        BasketBall.belongsTo(models.Park, {
          foreignKey: 'parkName'
        });
      };

    return BasketBall;
};