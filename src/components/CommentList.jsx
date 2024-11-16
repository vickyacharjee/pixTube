import React from 'react'
import Comment from './Comment'

const CommentList = ({info}) => {
    

  return info.map((comment,index)=>(
    <div>
        <Comment key={index} info={comment} />
        <div className="border-l border-l-black pl-1 ml-5"
        >
        {/* <Comment key={index} info={comment} />
        <Comment key={index} info={comment} />
        <Comment key={index} info={comment} /> */}
        <CommentList info={comment.replies}/>

        </div>
    </div>
  ))
    
}

export default CommentList