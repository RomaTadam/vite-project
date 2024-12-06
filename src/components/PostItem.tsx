import React from 'react'

export default function PostItem(props) {
  console.log('PostItem');
  console.log(PostItem);
  console.log('====');
  
  
  return (
    <div>
      <div>{props.post.id}</div>
      <div>{props.post.value}</div>
    </div>
  )
}
