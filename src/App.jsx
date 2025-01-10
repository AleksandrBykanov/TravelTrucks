import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx'

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
