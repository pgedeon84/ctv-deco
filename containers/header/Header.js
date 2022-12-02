import classes from "./Header.module.css";
import Image from "next/image";
import HOME from "../../public/Images/HOME.svg";
import DECOR from "../../public/Images/DECOR.svg";

const Header = ({ srcFront, srcMiddle, srcRear }) => {
  const imgFront = {
    border: 4,
    borderColor: "#9584F3",
    borderStyle: "solid",
  };

  const imgMiddle = {
    border: 4,
    borderColor: "#FF9898",
    borderStyle: "solid",
  };

  const imgRear = {
    border: 4,
    borderColor: "#FFE8AD",
    borderStyle: "solid",
  };

  return (
    <div className={classes.ctv__header}>
      <div className={classes.ctv__header_img__wrapper}>
        <div className={classes.ctv__header_text_home}>
          <Image src={HOME} alt="Home" />
        </div>
        <div className={classes.ctv__header_img_wrapper_sm}>
          <div className={classes.ctv__header_img__img_front}>
            <Image
              src={srcFront}
              alt="Deco Picture"
              width={213}
              height={320}
              style={imgFront}
            />
          </div>
          <div className={classes.ctv__header_img__img_middle}>
            <Image
              src={srcMiddle}
              alt="Deco Picture"
              width={213}
              height={320}
              style={imgMiddle}
            />
          </div>
          <div className={classes.ctv__header_img__img_rear}>
            <Image
              src={srcRear}
              alt="Deco Picture"
              width={340}
              height={228}
              style={imgRear}
            />
          </div>
        </div>
        <div className={classes.ctv__header_img_wrapper_lg}>
          <div className={classes.ctv__header_img__img_front}>
            <Image
              src={srcFront}
              alt="Deco Picture"
              width={419}
              height={609}
              style={imgFront}
            />
          </div>
          <div className={classes.ctv__header_img__img_middle}>
            <Image
              src={srcMiddle}
              alt="Deco Picture"
              width={419}
              height={609}
              style={imgMiddle}
            />
          </div>
          <div className={classes.ctv__header_img__img_rear}>
            <Image
              src={srcRear}
              alt="Deco Picture"
              width={685}
              height={481}
              style={imgRear}
            />
          </div>
        </div>
        <div className={classes.ctv__header_text_decor}>
          <Image src={DECOR} alt="Decor" />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
