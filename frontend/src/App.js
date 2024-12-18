import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Login from './pages/auth/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
   <Login/>
   <Home/>
    </div>
  );
}

export default App;
