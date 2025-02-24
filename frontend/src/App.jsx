import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CreateProduct from './pages/product/createProduct/CreateProduct';

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/product',
    element:<CreateProduct/>
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
