import classes from "./Showcase.module.css";
import { Button, ImageContainer } from "../../components";
import { featuredProjects } from "../../data/projectData";

const showcase = () => {
  return (
    <div className={classes.ctv__showcase}>
      <h4 className={classes.ctv__showcase_title}>Featured Projects:</h4>
      <div className={classes.ctv__showcase_project__container}>
        {featuredProjects.map((project) => (
          <ImageContainer
            key={project.src}
            src={project.src}
            alt={project.alt}
            desc={project.desc}
            width={project.width}
            height={project.height}
          />
        ))}
      </div>
      <div className={classes.ctv__showcase_button}>
        <Button href="/residential" label="All Residential Projects" />
      </div>
    </div>
  );
};

export default showcase;
