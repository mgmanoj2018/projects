import { useReducer } from "react";
import { createContext } from "react";

export const PostContext = createContext({
  PostList:[],
  AddPost: () => {},
  DeletePost: () => {},
});


const Postreducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if(action.type ==="DELETE_POST"){
    newPostList = currentPostList.filter((post)=>post.id !==action.payload.postId)
  }else if(action.type==="ADD_POST"){
    newPostList = [...currentPostList,action.payload]
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
  const [postList, dispatchPostList] = useReducer(Postreducer, 
    DEFAUTPOSTLIST
  );
  // console.log(postList)
  return (
    <PostContext.Provider
      value={{ postList, AddPost, DeletePost }}
    >
      {children}
    </PostContext.Provider>
  );
}

const DEFAUTPOSTLIST = [
  {
    id: "1",
    title: "GO to Mumbai",
    body: "Hi fiends, I am going to Mumbai for vacations. Hope to enjoy a lot. Peace out ",
    userId: "user-9",
    reactions: 2,
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ke bad pass ho gaye bhai. Hard to believe. ",
    userId: "user-12",
    reactions: 9,
    tags: ["graduation", "Unbelievable"],
  },
]

export default PostListProvider;
