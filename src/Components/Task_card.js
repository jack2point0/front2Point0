import React, { Component } from 'react';
import TaskExpansionRow from './TaskExpansionRow'
import AddButton from './AddButton'
import TaskTileDescription from './taskTileDescription'

class Task_Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      my_tasks:[],
      on: false,
    }
  }
  render() {
    return (
      <div className="tile">
        <div>
          <div className="bodyBox box">
            <div className="catInfoContainer">
              <i class={this.iconChooser(this.props.info.category)}></i>
              {this.props.info.sub_category}
            </div>
            <hr/>
          </div>
          <div className="bodyBox box tileTitle">
          {this.props.info.title}
          </div>
          {this.state.on === false && <TaskTileDescription description={this.props.info.description}/>}
          {this.state.on === false && <AddButton toggle={this.handleTaskToggle}/>}
        </div>
        {this.state.on && <TaskExpansionRow info={this.props.info} userID={this.props.userID} handleNewMyTaskObject={this.props.handleNewMyTaskObject} toggle={this.handleTaskToggle}/>}
      </div>
    );
  }

  handleTaskToggle = () => {
    let { on } = this.state
    on = !on;
    this.setState({on})
  }

  iconChooser = (category) => {
    const iconArray = ["fas fa-home fa-2x",
                       "fas fa-car fa-2x",
                       "fas fa-user-md fa-2x",
                       "fas fa-paw fa-2x",
                       "fas fa-question-circle fa-2x",
                       "fas fa-money-bill fa-2x"
                      ]
    let index
    switch(category){
      case "House": index = 0; break
      case "Car": index = 1; break
      case "Medical": index = 2; break
      case "Pets": index = 3; break
      case "Miscellaneous": index = 4; break
      case "Money": index = 5; break
    }
    return iconArray[index]
  }

}

export default Task_Card;
