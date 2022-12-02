import classes from "../styles/residential.module.css";
import { Button, ImageContainer } from "../components";
import { residentialProjects } from "../data/projectData";

const Residential = () => {
  return (
    <div className={classes.ctv__residential}>
      <h3 className={classes.ctv__residential_title}>
        All Residential Projects
      </h3>
      {residentialProjects.map((project) => (
        <ImageContainer
          key={project.src}
          src={project.src}
          alt={project.alt}
          desc={project.desc}
          width={project.width}
          height={project.height}
        />
      ))}
      <div className={classes.ctv__residential_button}>
        <Button href="/" label="Back" />
      </div>
    </div>
  );
};

export default Residential;
