import { BsSuitHeart } from "react-icons/bs";
import css from "./CatalogTruckCard.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteTruck } from "../redux/favorites/slice";
import { selectIsFavoriteId } from "../redux/favorites/selector";

const CatalogTruckCard = ({ truck }) => {

  const favorite = useSelector(selectIsFavoriteId);
  const dispatch = useDispatch();

  const { name, price, rating, location, description, reviews, gallery, id } =
    truck;

  const handleIsFavorite = () => {
    dispatch(toggleFavoriteTruck({ id }));
  };

  return (
    <section className={css.container}>
      <div className={css.imgContainer}>
        <img className={css.img} src={gallery[0].thumb} />
      </div>
      <div className={css.info}>
        <div className={css.cost}>
          <h2 className={css.name}>{name}</h2>
          <div>
            <h2 className={css.price}>{`€ ${Number(price).toFixed(2)}.`}</h2>
            <button
              onClick={handleIsFavorite}
              type="button"
              className={css.buttonHeart}
            >
              <BsSuitHeart
                className={clsx(
                  favorite.some((item) => item.id === id)
                    ? css.active
                    : css.disabled
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogTruckCard;
