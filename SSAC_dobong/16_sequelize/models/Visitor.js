const Visitor = function (Sequelize, DataTypes) {
  // Sequelize 는 model/index.js 의 Sequelize
  // DataTypes 는 model/index.js 의 Sequelize

  //   const model=Sequelize.define(params1,params2,params3)

  //params1 : 모델 이름 설정 문자열처리
  //params2 : 컬럼을 정의,(create table 제약조건)
  //params3 : 모델 옵션
  const model = Sequelize.define(
    "Visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      timestamps: false, // 오타 수정: timestamps
      freezeTableName: true,
    }
  );

  return model; // 모델 객체 반환
};

module.exports = Visitor;
