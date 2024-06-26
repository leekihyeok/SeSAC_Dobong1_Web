const socketIO = require("socket.io");
function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", // react server와 통신하기 위함
    },
  });

  const nickInfo = {};
  io.on("connection", (socket) => {
    socket.on("checkNick", (nickname) => {
      console.log(nickInfo);

      // [닉네임 사용2] 중복 체크
      // 입장 실패, 입장 성공 각각의 경우에 대해 클라이언트에게 데이터 보내주기

      // Object.values = ['닉네임1', '닉네임2']
      if (Object.values(nickInfo).includes(nickname)) {
        // 닉네임이 nickInfo에 있을 때 [입장 실패]
        socket.emit("error", "이미 존재하는 닉네임입니다.");
      } else {
        // 닉네임이 nickInfo에 없을 때 [입장 성공]
        // (1) 일치하는게 없을 때, nickInfo에 닉네임 넣기
        nickInfo[socket.id] = nickname;
        // (2) 입장 성공 닉네임 정보 클라이언트에게 전달
        socket.emit("entrySuccess", nickname);
        // (3) 입장 성공 시, 전체 클라이언트에게 입장 알림 보내주기
        socket.broadcast.emit(
          "notice",
          `${nickInfo[socket.id]}님이 입장하셨습니다.`
        );
        // (4) 입장 성공 시, 전체 클라이언트에게 nickInfo 전달
        io.emit("updateNicks", nickInfo);
      }
    });

    socket.on("disconnect", () => {
      io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
      delete nickInfo[socket.id];
      io.emit("updateNicks", nickInfo);
    });

    socket.on("send", (msgData) => {
      if (msgData.dm === "all") {
        // 전체에 메세지 보내기
        io.emit("message", {
          id: msgData.myNick,
          message: msgData.msg,
        });
      } else {
        // dm
        // (1) io.to(socket.id).emit(~)
        // 특정 소켓아이디에게만 전달(나 포함 X)
        io.to(msgData.dm).emit("message", {
          id: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
        // (2) socket.emit(~~~)
        // 나에게만 메세지 보내기
        socket.emit("message", {
          id: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
      }
    });
  });
}

module.exports = socketHandler;
