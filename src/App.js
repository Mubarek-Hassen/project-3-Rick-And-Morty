import { Routes, Route } from 'react-router-dom';
import Character from './components/show';
import './styles/App.css';
import Main from './components/main';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path='/character' element={<Main/>}/>
        <Route path={'/character/:id'} element={<Character />}/>
      </Routes>
      </div>
  );
}

export default App;
