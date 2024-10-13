import './App.css'
import SignUp from './components/SignUp'
import Nav from './views/Nav'
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
