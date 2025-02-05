import notFoundImage from '../../assets/404-error.jpg';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img className={css.image} src={notFoundImage} alt="image 404" />
    </div>
  );
};

export default NotFoundPage;