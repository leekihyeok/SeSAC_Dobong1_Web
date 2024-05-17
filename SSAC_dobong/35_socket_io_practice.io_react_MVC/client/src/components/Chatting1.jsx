import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me", // me, other, notice
      content: "내가 작성한 메세지",
    },
    {
      type: "other", // me, other, notice
      content: "남이 작성한 메세지",
    },
    {
      type: "notice", // me, other, notice
      content: "~~~님이 입장하셨습니다.",
    },
  ]);

  useEffect(() => {
    initSocketConnect();
    // [문제점] newChatList를 만들 때 mount시점의 chatList만 이용 중
    // socket.on("notice", (notice) => {
    //   //{type: 'notice', content: notice}
    //   const newChatList = [...chatList, { type: "notice", content: notice }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    socket.on("notice", (notice) => {
      //{type: 'notice', content: notice}
      const newChatList = [...chatList, { type: "notice", content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 입장했는지 공지 (socket.id)</li>
      </ul>
      <div className="container">
        <header>코코아톡🐛</header>
        <section>
          {/* <Speech chat={chatList[0]}></Speech>
          <Speech chat={chatList[1]}></Speech>
          <Notice chat={chatList[2]}></Notice> */}
          {chatList.map((chat, i) => {
            if (chat.type === "notice") {
              return <Notice key={i} chat={chat} />;
            } else {
              return <Speech key={i} chat={chat} />;
            }
          })}
        </section>
        <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
          <select id="dm-select">
            <option value="all">전체</option>
          </select>
          <input type="text" placeholder="메세지 입력" />
          <button onChange={(e) => setMsgInput(e.target.value)}>전송</button>
        </form>
      </div>
    </>
  );
}
