import React from 'react'
import PostItem from './PostItem'

export default function PostList({savedItems}) {
  console.log('PostList');
  console.log(savedItems);
  console.log('===');
  
  return (
    <div>
      {
        savedItems.map((item, index) =>
          <PostItem post={item} number={index + 1} key={item.id} />
        )
      }
    </div>
  )
}
