import classes from "./AboutInfo.module.css";
import Link from "next/link";

const AboutInfo = () => {
  return (
    <div className={classes.ctv__aboutInfo}>
      <p className={classes.ctv__aboutInfo_text}>
        Your needs, your desires, your tastes. I create your new decor in your
        image. My name is Carla-Valerie. I am your decorative accomplice.
      </p>
      <Link href="" className={classes.ctv__aboutInfo_link}>
        Learn more about me
      </Link>
    </div>
  );
};

export default AboutInfo;
