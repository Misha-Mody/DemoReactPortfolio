import React, { Component } from "react";
import PropTypes from "prop-types";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card bg-dark">
          <img src={this.props.url} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectCard;
