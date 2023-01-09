import React,{Fragment} from 'react'
import Header from './components/LayOut/Header';
import Meals from './components/LayOut/Meals';
import List from './components/LayOut/List';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
        <List/>
      </main>
    </Fragment>
  );
}

export default App;
