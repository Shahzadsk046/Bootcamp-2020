import {useState} from 'react'
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext'

function App() {
  // const [theme, setTheme] = useState('blue');
  
  // const onClickHandler = () => {
  //   setTheme(theme === 'red' ? 'blue' : 'red');
  // }

  let countState = useState(1)
  // let [count, setCount] = useState(35)

  return (
    <div className="App">
      {/* <h1>This is  Color</h1>
      <Parent theme = {theme}/>
      <button onClick = {onClickHandler}>Change Color</button> */}
      {/* <Parent name="Shehzad"/> */}

      <CounterContext.Provider value={countState}>
        <div>
          <Parent />
        </div>


      </CounterContext.Provider>


    </div>
  );
}

export default App;
