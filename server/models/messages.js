module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
  }
  });
  return Messages;
};