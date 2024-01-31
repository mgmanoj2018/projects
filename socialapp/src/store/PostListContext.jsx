import { useReducer } from "react";
import { createContext } from "react";

export const PostContext = createContext({
  PostList:[],
  AddPost: () => {},
  fetchData :() =>{},
  DeletePost: () => {},
});


const Postreducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if(action.type ==="DELETE_POST"){
    newPostList = currentPostList.filter((post)=>post.id !==action.payload.postId)
  }else if(action.type==="ADD_POST"){
    newPostList = [...currentPostList,action.payload]
  }else if(action.type ==="POST_LIST_ALL"){
    newPostList = action.payload.posts
  }
  return newPostList;
};
const PostListProvider = ({children}) => {
    
  const AddPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id:Date.now(),
        userId:userId,
        title:postTitle,
        body:postBody,
        reactions:reactions,
        tags:tags

      }
    })
  };
  const DeletePost = (postId) => {
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId
      }
    })
  };
  const fetchData = (posts)=>{
      dispatchPostList({
        type:"POST_LIST_ALL",
        payload:{
          posts
        }
      })
  }
  const [postList, dispatchPostList] = useReducer(Postreducer, 
    []
  );
  // console.log(postList)
  return (
    <PostContext.Provider
      value={{ postList, fetchData, AddPost, DeletePost }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostListProvider;
