import React, { Component } from 'react';

class ViewPersonalProfile extends Component {
  render() {
    const { first_name, last_name, phone } = this.props.profile
    return (
      <main>
        <section className="profileTitle">
          <h2>Personal Info</h2>
          <i className="fas fa-edit fa-2x icon" onClick={this.props.handlePersonalClick}></i>
        </section>

        <hr id="settingsHR"/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
              <span className="settingsLabel">
                  First Name:
              </span>
              <hr/>
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Last Name:
                </span>
              <hr/>
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Phone:
                </span>
              <hr/>
            </p>
          </section>
          <section className="column">
            <p className="profileLabel">
              {first_name}
              <hr/>
            </p>
            <p className="profileLabel">
              {last_name}
              <hr/>
            </p>
            <p className="profileLabel">
              {phone}
              <hr/>
            </p>
          </section>
        </section>
      </main>
    )
  }
  componentDidMount(){
    this.props.refresh()
  }
}

export default ViewPersonalProfile;
