import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({ label, href }) => {
  return (
    <Link className={classes.ctv__button_wrapper} href={href}>
      <button type="button" className={classes.ctv__button}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
