import './App.css';
import Book from './book'

function App() {
  return (
    <div className="App">
      <header className = 'App-header'>
        <h1>Assignment # 3 by Shehzad Khan</h1>
      <Book name = "C++" author = "Thomas" />
      <Book name = "Python" author = "David Ascher" />
      <Book name = "Javascript" author = "Marjin Haverbeke" />
      </header>
    </div>
  );
}

export default App;
