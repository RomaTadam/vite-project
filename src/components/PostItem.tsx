import React from 'react'

export default function PostItem(props) {
  // console.log('PostItem');
  // console.log(props);
  // console.log('====');
  
  
  return (
    <div className='post'>
      <div>{props.number}</div>
      <div>{props.post.product}</div>
    </div>
  )
}
