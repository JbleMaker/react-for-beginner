import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/components/Movie.module.css";

const Movie = ({ id, coverImg, title }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__cover} src={coverImg} alt={title} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`} className={styles.title}>
          {title.length > 24 ? `${title.slice(0, 24)}...` : title}
        </Link>
      </h2>
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Movie;
