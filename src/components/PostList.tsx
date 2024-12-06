import React from 'react'
import PostItem from './PostItem'

export default function PostList({savedItems}) {
  console.log('PostList');
  console.log(savedItems);
  console.log('===');
  
  
  
  return (
    <div>
      <h1>Список покупок:</h1>
      {savedItems.map((item) => {
        console.log('item: ', item);
        
        <PostItem post={item} key={item.id} />
      })}
    </div>
  )
}
