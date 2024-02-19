const Team = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "Team",
    {
      team_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "team",
      timestamps: true, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = Team;
