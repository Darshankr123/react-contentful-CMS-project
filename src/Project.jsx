import React from "react";
import "./fetch.js";
import { useFetchProducts } from "./fetch.js";

const Project = () => {
  const { loading, projects } = useFetchProducts();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }
  //   console.log(projects);
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((item) => {
            // console.log(item);
            const { id, img, url, title } = item;

            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
