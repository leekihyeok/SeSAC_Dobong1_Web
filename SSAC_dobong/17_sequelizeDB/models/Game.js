const Game = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "Game",
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: "game",
      timestamps: true, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = Game;
