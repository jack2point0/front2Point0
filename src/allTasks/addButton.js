import React, { Component } from 'react';
import './styles.css'

class AddButton extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="tileBtnContainer">
        <div className="tileBtn" onClick={this.props.toggle}>
          Add
        </div>
      </div>
    );
  }


}

export default AddButton;
