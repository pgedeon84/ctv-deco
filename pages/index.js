import { Navbar, AboutInfo, ImageContainer } from "../components";
import { Header, Showcase } from "../containers";
import { Footer } from "../containers";

const Home = () => {
  const frontPic =
    "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/8.webp?alt=media&token=b41fec6e-fafb-4d13-99a6-caccbff36ad8";
  const middlePic =
    "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/11.webp?alt=media&token=cd947427-cfcb-412f-979b-4fa1f9fcaf40";
  const rearPic =
    "https://firebasestorage.googleapis.com/v0/b/cvt-deco.appspot.com/o/4.webp?alt=media&token=4a8cd909-c3d0-4458-a80a-2b32c176b06a";
  return (
    <div>
      <Header srcFront={frontPic} srcMiddle={middlePic} srcRear={rearPic} />
      <AboutInfo />
      <Showcase />
    </div>
  );
};

export default Home;
