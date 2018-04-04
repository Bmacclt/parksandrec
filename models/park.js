module.exports = function (sequelize, DataTypes) {
    var Park = sequelize.define("Park", {
        park_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        size: {
            type: DataTypes.INTERGER,
            allowNull: false
        },
        handi_acces: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    return Park;
};