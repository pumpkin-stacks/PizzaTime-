import './App.css'
import SignUp from './components/SignUp'
import Nav from './views/Nav'
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Order from './components/Order'
import Account from './components/Account'
import Checkout from './components/Checkout'
import Logout from './components/Logout'
import Favorites from './components/Favorites'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/favorites' element={<Favorites/>}/>

      </Routes>
    </>
  )
}

export default App
