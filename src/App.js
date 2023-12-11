import Films from './components/Films';
import FilmList from './components/FilmList';
import Search from './components/Search';
import Add from './components/Add';
import './App.css';

function App() {
  return (
    <div className="App">
      <Films/>
      <FilmList/>
      <Search/>
      <Add/>
    </div>
  );
}

export default App;