import css from './CatalogList.module.css';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/trucks/selectors';
import CatalogTruckCard from '../CatalogTruckCard/CatalogTruckCard';

const CatalogList = () => {
  const trucks = useSelector(selectItems);
  

  return (
<ul className={css.list}>
        {trucks.map(truck => (
          <li className={css.item} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>
  )
}

export default CatalogList