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

<<<<<<< HEAD
    });
    
    Park.associate = function(models) {
        Park.hasOne(models.BasketBall, {
          onDelete: "cascade"
        });
      };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Golf, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Playground, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Soccer, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Tennis, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Trails, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.VendingMachines, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.Views, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.WaterSports, {
      //     onDelete: "cascade"
      //   });
      // };

      // Park.associate = function(models) {
      //   Park.hasOne(models.WorkoutGear, {
      //     onDelete: "cascade"
      //   });
      // };
      
=======
  });

  Park.associate = function (models) {
    Park.hasOne(models.BasketBall, {
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
>>>>>>> f944eb6070d1ab67cd9302139f9b061cfb199428

  return Park;
};