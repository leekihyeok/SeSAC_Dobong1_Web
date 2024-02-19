const Player = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "Player",
    {
      player_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "player",
      timestamps: true, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = Player;
