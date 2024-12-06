import React, { useState } from 'react'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'

export default function PostForm({create}) {
  // console.log('PostForm');
  // console.log({create});

  const [toBuy, setToBuy] = useState({product: ""});

  const addNew = (e) => {
    // console.log('addNew');
    // console.log(e);

    e.preventDefault();
    const newNew = {
      ...toBuy, id: Date.now()
    }
    create(newNew)
    setToBuy({product: ""})
  }
    
  return (
    <form>
      <MyInput
        value={toBuy.product}
        onChange={e => setToBuy({...toBuy, product: e.target.value})}
        type="text" 
        placeholder='Введите покупку' 
      />
      <MyButton onClick={addNew}>Добавить покупку</MyButton>
    </form>
  )
}
