import React, { Component } from "react";
import ProjectCard from "./ProjectCard.js";
import data from "../data.js";
import PropTypes from "prop-types";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  getData() {
    this.setState({ projects: data });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="row mt-5">
        <h1 className="project-title">{this.props.heading} Projects</h1>
        <div className="d-flex" style={{ overflowY: "scroll" }}>
          {this.state.projects.map((d) => (
            // eslint-disable-next-line react/jsx-key
            <ProjectCard
              title={d.title}
              url={d.url}
              description={d.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Projects;
