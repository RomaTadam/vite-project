import React from 'react'
import PostItem from './PostItem'

export default function PostList({savedItems, remove}) {
  // console.log('PostList');
  // console.log(savedItems);
  // console.log('===');
  
  return (
    <div>
      {
        savedItems.map((item, index) =>
          <PostItem remove={remove} post={item} number={index + 1} key={item.id} />
        )
      }
    </div>
  )
}
