import classes from "./Showcase.module.css";
import { Button, ImageContainer } from "../../components";

const showcase = () => {
  const imgOne = {
    src: "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/lr-corner.webp?alt=media&token=684b11bd-0d0e-411a-ab4a-3b2199117d8d",
    width: 200,
    height: 450,
    alt: "Picture",
    desc: "Rue Papineau - TikTok Residential",
  };
  const imgTwo = {
    src: "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/5.webp?alt=media&token=1c06cf78-63f8-472b-86ef-0ed1197ac66f",
    width: 200,
    height: 450,
    alt: "Picture",
    desc: "Rue Papineau - TikTok Residential",
  };
  const imgThree = {
    src: "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/4.webp?alt=media&token=4a8cd909-c3d0-4458-a80a-2b32c176b06a",
    width: 200,
    height: 450,
    alt: "Picture",
    desc: "Rue Papineau - TikTok Residential",
  };

  return (
    <div className={classes.ctv__showcase}>
      <h4 className={classes.ctv__showcase_title}>Featured Projects:</h4>
      <div className={classes.ctv__showcase_project__container}>
        <ImageContainer
          src={imgOne.src}
          alt={imgOne.alt}
          desc={imgOne.desc}
          width={imgOne.width}
          height={imgOne.height}
        />
        <ImageContainer
          src={imgTwo.src}
          alt={imgTwo.alt}
          desc={imgTwo.desc}
          width={imgTwo.width}
          height={imgTwo.height}
        />
        <ImageContainer
          src={imgThree.src}
          alt={imgThree.alt}
          desc={imgThree.desc}
          width={imgThree.width}
          height={imgThree.height}
        />
      </div>
      <div className={classes.ctv__showcase_button}>
        <Button label="All Residential Projects" />
      </div>
    </div>
  );
};

export default showcase;
