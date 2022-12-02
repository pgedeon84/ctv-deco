import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.ctv__footer}>
      <div className={classes.ctv__footer_media}>
        <div>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Pintrest</p>
        </div>
        <div>
          <p>Rue Edouad Monpetit</p>
          <p>Cote-des-neige, Montreal</p>
          <p>Quebec, Canada</p>
        </div>
        <div>
          <p>carlavalerie@hotmail.com</p>
          <p>(514) 883-7471</p>
          <p>Mon-Fri 9h to 17h</p>
        </div>
        <div>
          <p>© 2022 Carla-Valerie Turene</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <p className={classes.ctv__footer_author}>
        Designed & Built by @prince_da_prettyboy
      </p>
    </div>
  );
};

export default Footer;
