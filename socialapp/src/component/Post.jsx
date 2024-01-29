import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/PostListContext";
const Post = ({ post }) => {
   const {DeletePost} = useContext(PostContext)
  return (
    <div className="card card-container" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={()=>{DeletePost(post.id)}}/>
        </span>
        <p className="card-text">{post.body} </p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary">{tag} </span>
        ))}
        <div className="text-bg-light reaction p-3">This Post Reactions by {post.reactions}</div>
      </div>
    </div>
  );
};

export default Post;
