import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import { PostContext } from '../store/PostListContext'

const PostList = () => {
 const {postList} =   useContext(PostContext)
 console.log(postList)
  return (
    <div>
        {postList.map(post=><Post key={post.id} post={post} />)}
    </div>
  )
}

export default PostList