import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import data from "../data.js";

class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="mt-5"> {this.props.title} Projects</h1>
				<div className="d-flex" style={{ overflowY: "scroll" }}>
					{data.map((d) => (
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

export default Projects;
