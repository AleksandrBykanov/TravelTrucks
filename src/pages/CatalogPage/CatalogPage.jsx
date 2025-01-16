import { useEffect } from "react";
import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../components/redux/trucks/operations";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
