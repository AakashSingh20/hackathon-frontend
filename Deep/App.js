
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup'
import Employee from './components/Employee';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
    </div>
  );
}

export default App;
