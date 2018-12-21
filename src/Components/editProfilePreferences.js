import React, { Component } from 'react';
import AuthService from '../services'
import { getProfile, editProfile } from '../API'
import Toggle from "react-toggle-component"
import "react-toggle-component/styles.css"

class EditProfilePreferences extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService()
    this.state ={
      profile: {
      }
    }
  }
  render() {
    return (
      <main>
        <section className="profileTitle">
          <h2>Edit Preferences</h2>
        </section>

        <hr id="settingsHR"/>

        <section id="profileSection">
          <section className="column">
            <p className="profileLabel">
                <span className="settingsLabel">
                    Home:
                </span>
                <hr/>
                <Toggle
                  name="home_owner"
                  checked={this.state.profile.home_owner}
                  onToggle={() => this.handleToggle("home_owner")}
                />
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Car:
                </span>
              <hr/>
              <Toggle
                name="car_owner"
                checked={this.state.profile.car_owner}
                onToggle={() => this.handleToggle("car_owner")}
                />
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Pets:
                </span>
              <hr/>
              <Toggle
                name="pet_owner"
                checked={this.state.profile.pet_owner}
                onToggle={() => this.handleToggle("pet_owner")}
                />
            </p>
          </section>
          <section className="column">
              <p className="profileLabel">
                  <span className="settingsLabel">
                      Medical:
                  </span>
                <hr/>
                <Toggle
                  name="medical"
                  checked={this.state.profile.medical}
                  onToggle={() => this.handleToggle("medical")}
                  />
              </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Financial:
                </span>
              <hr/>
              <Toggle
                name="financial"
                checked={this.state.profile.financial}
                onToggle={() => this.handleToggle("financial")}
                />
            </p>
            <p className="profileLabel">
                <span className="settingsLabel">
                    Misc:
                </span>
              <hr/>
              <Toggle
                className="toggleBtn"
                name="misc"
                checked={this.state.profile.misc}
                onToggle={() => this.handleToggle("misc")}
                />
            </p>
          </section>
        </section>
        <section className="acceptPreferenceBtn">
            <i id="profileCheck" className="far fa-check-square fa-3x icon" onClick={this.handleSubmit}></i>
        </section>
      </main>
    )
  }

  componentDidMount = () => {
    getProfile(this.auth.getUserId())
    .then(APIprofile => {
      console.log(APIprofile);
      this.setState({profile: APIprofile})
    })
  }

  handleToggle = (category) => {
    const { profile } = this.state
    profile[category] = !profile[category]
    this.setState({profile})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    editProfile(this.state.profile)
    .then(resp => {

      if (resp.errors) {
        console.log(resp.json());
      } else {
      this.props.handlePreferencesClick()
      this.props.refresh()
      }
    })
  }
}

export default EditProfilePreferences;
