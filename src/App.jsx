import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'

function App() {


  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
    </Routes>
    </>
  )
}

export default App
