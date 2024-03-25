import { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const result = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
      });

      setPosts(result.data.slice(0, 20));
    };

    getPosts();

    return () => {
      console.log("연결해제 완료");
    };
  }, []);

  useEffect(() => {
    console.log("글 정보 업데이트 : ", posts.length);

    if (posts.length > 0) {
      setLoading(false);
    }
  }, [posts]);

  const titleSt = {
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const loadingSt = {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const divSt = {
    width: "80%",
    height: "80px",
    backgroundColor: "skyblue",
    margin: "10px auto",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "5px 5px 5px lightgrey",
  };

  return (
    <>
      <div style={titleSt}>Post List</div>
      {loading && <div style={loadingSt}>Loading...</div>}
      {posts.map((post) => (
        <div style={divSt} key={post.id}>
          No. {post.id} - {post.title}
          <br />
          {post.body}
        </div>
      ))}
    </>
  );
}
export default function Practice05() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("보기");

  const changeVisible = () => {
    setVisible(() => !visible);
    setText(() => (visible ? "보기" : "숨기기"));
  };

  return (
    <>
      <button onClick={changeVisible}>글 목록 {text}</button>
      {visible && <PostList></PostList>}
    </>
  );
}
