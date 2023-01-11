import React,{Fragment,useState} from 'react'
import Header from './components/LayOut/Header';
import Meals from './components/LayOut/Meals';
import List from './components/LayOut/List';
import Cart from './components/Cart/Cart';
function App() {
  const [create,setCreate]=useState(false);
  const ShowCartHandler=()=>{
    setCreate(true);
  }
  const HideCartHandler=()=>{
    setCreate(false);
  }
  return (
    <Fragment>
      {create&&<Cart onClose={HideCartHandler}/>}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals/>
        <List/>
      </main>
    </Fragment>
  );
}

export default App;
