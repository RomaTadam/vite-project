import React from 'react'

export default function PostItem(props) {
  // console.log('PostItem');
  // console.log(props);
  // console.log('====');
  
  
  return (
    <div>
      <div>{props.post.id}</div>
      <div>{props.post.toBuy}</div>
    </div>
  )
}
