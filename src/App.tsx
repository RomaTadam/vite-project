import { useRef, useState } from 'react'
import MyButton from './components/button/MyButton.tsx'
import PostItem from './components/PostItem.tsx'
import MyInput from './components/input/MyInput.tsx'
import PostList from './components/PostList.tsx';
import './styles/app.css'
import PostForm from './components/PostForm.tsx';

function App() {
  const [savedItems, setSavedItems] = useState([
    {id: 1, product: 'test1'},
    {id: 2, product: 'test2'},
    {id: 3, product: 'test3'},
  ]);

  const addNewBuy = (newT) => {
    // console.log('addNewBuy')
    // console.log(newT)
    setSavedItems([...savedItems, newT]);
  }
  
  const removeItem = (trash) => {
    // console.log(trash)
    setSavedItems(savedItems.filter(qq => qq.id !== trash.id))
  }

  return (
    <div className='App'>
      <div>
        <h1>Добавить покупку</h1>
        <PostForm create={addNewBuy}/>
      </div>
      <hr className='Hr'/>
      <div>
        <h1>Список покупок:</h1>
        {savedItems.length !== 0
          ?
            <PostList remove={removeItem} savedItems={savedItems} />
          :
            <h3 style={{textAlign:'center'}}>Список пуст!</h3>
        }
      </div>
    </div>
  )
}

export default App
