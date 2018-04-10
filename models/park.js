module.exports = function (sequelize, DataTypes) {
  var Park = sequelize.define("Park", {
    parkName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    handiAcces: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    },
    restrooms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });

  Park.associate = function (models) {
    Park.hasMany(models.BasketBall, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Golf, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Playground, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Soccer, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Tennis, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Trails, {
      onDelete: "cascade"
    });
    Park.hasOne(models.VendingMachines, {
      onDelete: "cascade"
    });
    Park.hasOne(models.Views, {
      onDelete: "cascade"
    });
    Park.hasOne(models.WaterSports, {
      onDelete: "cascade"
    });
    Park.hasOne(models.WorkoutGear, {
      onDelete: "cascade"
    });
  };

  return Park;
};