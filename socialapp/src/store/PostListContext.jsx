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
    
  const AddPost = (post) => {
    dispatchPostList({
      type:"ADD_POST",
      payload: {post}

      
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
    console.log("delete function render")
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
