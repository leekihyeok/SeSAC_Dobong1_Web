const TeamGame = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: "teamGame",
      timestamps: true, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = TeamGame;
