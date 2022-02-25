import React, { Component } from "react";

export default class ProjectCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<img src={this.props.url} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-title"> {this.props.title}</p>
					<p className="card-text">{this.props.description}</p>
				</div>
			</div>
		);
	}
}
