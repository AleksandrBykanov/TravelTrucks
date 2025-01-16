import { Form, Formik } from "formik";
import css from "./Filters.module.css";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/trucks/selectors";
import Location from "../Location/Location"
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehiclesOptions from "../VehiclesOptions/VehiclesOptions";

const getUniqueValues = (items, key) => [
  ...new Set(items.map(item => item[key])),
];

const Filters = () => {
  const items = useSelector(selectItems);

  const formTypes = getUniqueValues(items, 'form').sort((a, b) => {
    const order = ['panelTruck', 'fullyIntegrated', 'alcove'];
    return order.indexOf(a) - order.indexOf(b);
  });

  const initialValues = {
    location: "",
    transmisson: "",
    form: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  };

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <Location />
        <VehicleEquipment />
        {formTypes.length > 0 && <VehiclesOptions formTypes={formTypes} />}
        <button className={css.buttonFilters} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
