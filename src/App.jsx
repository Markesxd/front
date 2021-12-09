import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.scss';
import { Home, Doctor, Manager } from './pages';
import { NavBar } from './components';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/medico' element={<Doctor/>}/>
        <Route exact path='/gerente' element={<Manager/>}/>
      </Routes>
    </Router>
  );
};

export { App };
