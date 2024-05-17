export default function Speech({ chat }) {
  // chat
  // {
  //     type: "me", // me, other, notice
  //     content: "내가 작성한 메세지",
  //  },
  //  {
  //     type: "other", // me, other, notice
  //     content: "남이 작성한 메세지",
  //  },
  // {type: 'me', content: '[DM] hi', isDm: true, name: 'a'}
  console.log(chat);
  return (
    <>
      <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {chat.type === "other" && <span className="nickname">{chat.name}</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
