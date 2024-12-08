import React from 'react'
import MyButton from './button/MyButton'

export default function PostItem(props) {
  // console.log('PostItem');
  // console.log(props);
  // console.log('====');
  
  
  return (
    <div className='post'>
      <div>{props?.number}</div>
      <div>{props?.post?.product}</div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
