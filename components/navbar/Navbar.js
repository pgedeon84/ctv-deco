import { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Images/Logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function NavLinks() {
    return (
      <ul>
        <li>
          <Link href="/">Welcome</Link>
        </li>
        <li>
          <Link href="/residential">Residential</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
  return (
    <div className={classes.cvt__navbar}>
      <div className={classes.cvt__navbar_links}>
        <div className={classes.cvt__navbar_logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={classes.cvt__navbar_links__container}>
          <NavLinks />
        </nav>
      </div>
      {/* Hamburger */}
      <div className={classes.cvt__navbar_hamburger}>
        {toggleMenu ? (
          <RiCloseLine
            size={35}
            onClick={() => setToggleMenu(false)}
            color="#463A86"
          />
        ) : (
          <RiMenu3Line
            size={35}
            onClick={() => setToggleMenu(true)}
            color="#463A86"
          />
        )}
        {toggleMenu && (
          <div className={classes.cvt__navbar_hamburger_container}>
            <nav>
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
