import classes from "./Layout.module.css";
import { Navbar } from "../";

const Layout = ({ children }) => {
  return (
    <div>
      <main className={classes.cvt__layout}>{children}</main>
    </div>
  );
};

export default Layout;
