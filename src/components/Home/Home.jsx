import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <button className={css.button} type="button">View Now</button>
      </div>
    </div>
  );
};

export default Home;
