import classes from "./Button.module.css";

const Button = ({ label }) => {
  return (
    <div className={classes.ctv__button_wrapper}>
      <button type="button" className={classes.ctv__button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
