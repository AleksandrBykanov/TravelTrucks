import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { Suspense, lazy } from "react";
import Features from "./components/Features/Features.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsTruckPage = lazy(() =>
  import("./pages/DetailsPage/DetailsPage.jsx")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:truckId" element={<DetailsTruckPage />}>
            <Route index element={<Features />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
