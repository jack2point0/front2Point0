import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="tileButtonContainer">
        <div className="tileAddBtn" onClick={this.props.toggle}>
          Add
        </div>
      </div>
    );
  }


}

export default AddButton;
