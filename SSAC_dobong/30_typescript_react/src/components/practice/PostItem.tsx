import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostItemProps {
  post: Post;
}

const postContainerStyle = {
  width: "80%",
  height: "100px",
  backgroundColor: "pink",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

const idStyle = {
  fontWeight: "bold",
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="PostItem" style={postContainerStyle}>
      <div>
        <span className="id" style={idStyle}>
          No. {post.id}
        </span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
