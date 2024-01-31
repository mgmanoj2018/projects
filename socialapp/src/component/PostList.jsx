import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostContext } from "../store/PostListContext";
import Wecome from "./Wecome";
import LoadingSpiner from "./LoadingSpiner";

const PostList = () => {
  const { postList, fetchData } = useContext(PostContext);
  // const [fatchData, setFetchData] = useState(false);
  const [loadingFeatch, setLoadingFetch] = useState(false);

  useEffect(() => {
    setLoadingFetch(true);
    const abortController = new AbortController();
    console.log(abortController)
    fetch("https://dummyjson.com/posts", { singnal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        fetchData(data.posts);
        setLoadingFetch(false);
      });
    return () => {
      console.log(abortController.abort());
      abortController.abort();
    };
  }, []);

  return (
    <>
      {loadingFeatch && <LoadingSpiner />}
      {!loadingFeatch && postList.length === 0 && <Wecome />}
      {!loadingFeatch &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
