import React from 'react'
import Comment from './Comment'
import { commentData } from '../utils/constants'
import CommentList from './CommentList'

const CommentContainer = () => {
  return (
    <div>
        <h1 className='p-2 m-2 text-2xl font-bold'>Comments</h1>
        <CommentList info={commentData}/>
    </div>
  )
}

export default CommentContainer


// commentData.map((data)=><Comment info={data}/>)