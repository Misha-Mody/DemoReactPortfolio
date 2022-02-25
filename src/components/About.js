import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = { viewMore: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ viewMore: !this.state.viewMore });
  }

  render() {
    return (
      <div className="row mt-3">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Consectetur
          impedit sint, reprehenderit, optio maiores, quod, expedita placeat
          nesciunt tenetur ad eaque doloribus sit unde ut quaerat harum corrupti
          velit quae.
        </p>
        {this.state.viewMore && (
          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
              Consectetur impedit sint, reprehenderit, optio maiores, quod,
              expedita placeat nesciunt tenetur ad eaque doloribus sit unde ut
              quaerat harum corrupti velit quae.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
              Consectetur impedit sint, reprehenderit, optio maiores, quod,
              expedita placeat nesciunt tenetur ad eaque doloribus sit unde ut
              quaerat harum corrupti velit quae.
            </p>
          </div>
        )}
        <a onClick={this.toggle}>
          Read {this.state.viewMore ? "less ↑" : "more ↓"}
        </a>
      </div>
    );
  }
}

export default About;
