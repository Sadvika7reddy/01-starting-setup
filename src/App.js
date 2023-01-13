import React,{useState} from 'react'
import Header from './components/LayOut/Header';
import Meals from './components/LayOut/Meals';
import List from './components/LayOut/List';
import Cart from './components/Cart/Cart';
import CreateProvider from './store/CreateProvider';
function App() {
  const [create,setCreate]=useState(false);
  const ShowCartHandler=()=>{
    setCreate(true);
  }
  const HideCartHandler=()=>{
    setCreate(false);
  }
  return (
    <CreateProvider>
      {create&&<Cart onClose={HideCartHandler}/>}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals/>
        <List/>
      </main>
    </CreateProvider>
  );
}

export default App;
