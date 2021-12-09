import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './global.scss';
import {Home, Medico, Gerente} from './pages';
import {NavBar} from './components';

function App() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/medico' element={<Medico/>}/>
          <Route exact path='/gerente' element={<Gerente/>}/>
        </Routes>
      </Router>
  );
}

export default App;
