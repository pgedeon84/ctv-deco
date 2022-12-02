import classes from "./Layout.module.css";
import { Navbar } from "../";
import { Footer } from "../../containers";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={classes.cvt__layout}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
