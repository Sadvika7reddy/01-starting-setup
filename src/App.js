import React,{Fragment} from 'react'
import Header from './components/LayOut/Header';
import Meals from './components/LayOut/Meals';
import List from './components/LayOut/List';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
        <List/>
      </main>
    </Fragment>
  );
}

export default App;
