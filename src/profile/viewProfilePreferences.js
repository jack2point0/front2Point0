import React, { Component } from 'react';

class ViewProfilePreferences extends Component {
  constructor(props){
    super(props)
  }


  render() {
    const { home_owner, car_owner, pet_owner, medical, financial, misc } = this.props

    console.log(this.props);
    return (
      <main>
        <section className="profileTitle">
          <h2>Task Preferences</h2>
          <i className="fas fa-edit fa-2x icon" onClick={this.props.handlePreferencesClick}></i>
        </section>

        <hr id="settingsHR"/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
                <span className="settingsLabel">
                    Home:
                </span>
              <hr/>
              {home_owner ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Car:
                </span>
              <hr/>
              {car_owner ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Pets:
                </span>
              <hr/>
              {pet_owner ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
          </section>
          <section className="column">
            <p className="profileLabel">
                <span className="settingsLabel">
                    Medical:
                </span>
              <hr/>
              {medical ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Financial:
                </span>
              <hr/>
              {financial ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Misc:
                </span>
              <hr/>
              {misc ? <i className="fas fa-check profileIcon"></i> : <i className="fas fa-times profileIcon"></i>}
            </p>
          </section>
        </section>
      </main>
    )
  }
}

export default ViewProfilePreferences;
