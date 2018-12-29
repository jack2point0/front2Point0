import React, { Component } from 'react';
import './styles.css'

class AcceptButton extends Component {
  render() {

    return (
      <div className="tileBtnContainer">
        <div className="tileBtn" onClick={this.props.accept}>
          Accept!
        </div>
      </div>
    );
  }


}

export default AcceptButton;
