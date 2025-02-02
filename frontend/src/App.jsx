import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
return <RouterProvider router={router}/>
  // return (
  //   <div className="App">
  //  <Login/>
  //  <Home/>
  //   </div>
  // );
}

export default App;
