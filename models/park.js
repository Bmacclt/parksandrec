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
            type: DataTypes.INTERGER,
            allowNull: false
        },
        handiAcces: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false

        },
        restrooms: {
            type: DataTypes.Boolean,
            allowNull: false,
            defaultValue: false

        }

    });
    Park.associate = function(models) {
        Park.hasMany(models.BasketBall, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Golf, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Playground, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Soccer, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Tennis, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Trails, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.VendingMachines, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.Views, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.WaterSports, {
          onDelete: "cascade"
        });
      };

      Park.associate = function(models) {
        Park.hasMany(models.WorkoutGear, {
          onDelete: "cascade"
        });
      };
      

    return Park;
};