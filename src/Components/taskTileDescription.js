import React, { Component } from 'react';

class TaskTileDescription extends Component {
  constructor(props) {
    super(props)

    this.state = {
      my_tasks:[],
      on: false,
    }
  }
  render() {
      console.log(this.props);
    return (
          <div className="bodyBox box tileDescription">
            <h5>{this.props.description}</h5>
          </div>
    );
  }
}
export default TaskTileDescription;
