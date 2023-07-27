import propTypes from "prop-types";
import styles from "../css/Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;

Button.propTypes = {
  text: propTypes.string.isRequired,
};
