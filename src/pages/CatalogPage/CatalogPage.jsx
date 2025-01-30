import { useEffect } from "react";
import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../redux/trucks/operations";
import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <Filters />
        <CatalogList />
      </div>
    </section>
  );
};

export default CatalogPage;
