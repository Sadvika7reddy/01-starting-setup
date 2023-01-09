import React,{Fragment} from 'react'
import Header from './components/LayOut/Header';
import Meals from './components/LayOut/Meals';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
