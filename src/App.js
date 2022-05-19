import { Routes, Route } from 'react-router-dom';
import Character from './components/show';
import './styles/App.css';
import Main from './components/main';
import Home from './components/Home';
import Search from './components/Search';
// import Results

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path='/character' element={<Main/>}/>
        <Route path={'/character/:id'} element={<Character />}/>
        <Route path={'/character/search'} element={<Search />}/>
      </Routes>
      </div>
  );
}

export default App;
