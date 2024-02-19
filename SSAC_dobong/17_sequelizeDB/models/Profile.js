const Profile = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "Profile",
    {
      profile_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "profile",
      timestamps: true, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = Profile;
