module.exports = function (sequelize, DataTypes) {
    var AllPark = sequelize.define("AllPark", {
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
      },
      basketball: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      golf: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      playground: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      soccer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      tennis: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      trails: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      vendingMachines: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      views: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      waterSports: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      },
      workoutGear: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
  
      }
  
    });
  
    return AllPark;
  };