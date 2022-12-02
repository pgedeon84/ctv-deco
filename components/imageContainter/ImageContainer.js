import Image from "next/image";
import classes from "./imageContainer.module.css";

const ImageContainer = ({ src, alt, desc, width, height }) => {
  return (
    <div className={classes.cvt__imageContainer_wrapper}>
      <Image src={src} alt={alt} width={width} height={height} priority />
      <h5 className={classes.cvt__imageContainer_text}>{desc}</h5>
    </div>
  );
};

export default ImageContainer;
