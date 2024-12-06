import { useRef, useState } from 'react'
import MyButton from './components/button/MyButton.tsx'
import PostItem from './components/PostItem.tsx'
import MyInput from './components/input/MyInput.tsx'
import PostList from './components/PostList.tsx';
// import './App.css'

function App() {
  const [toBuy, setToBuy] = useState([]);
  const [savedItems, setSavedItems] = useState([
    {id: 1, toBuy: 'test1'},
    {id: 2, toBuy: 'test2'},
    {id: 3, toBuy: 'test3'},
  ]);

  const addNewBuy = (e) => {
    e.preventDefault();
    const newToBuy = {
      id: Date.now(),
      toBuy
    }
    // console.log(toBuy);
    // console.log(newToBuy);
    setSavedItems([...savedItems, newToBuy])
    console.log(savedItems);
  }

  return (
    <>
      <div>
        <h1>Добавить покупку</h1>
        <form>
          <MyInput
            value={toBuy}
            onChange={e => setToBuy(e.target.value)}
            type="text" 
            placeholder='Введите покупку' 
          />
          <MyButton onClick={addNewBuy}>Добавить покупку</MyButton>
        </form>
      </div>
      <hr />
      <div>
        {/* console.log(savedItems); */}
        {/* <PostItem post={{id:1, value: "test from App"}} /> */}

        <PostList savedItems={savedItems} />
      </div>
    </>
  )
}

export default App
