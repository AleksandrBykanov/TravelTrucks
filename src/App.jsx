import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
