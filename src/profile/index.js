import React, { Component } from 'react';
import AuthService from '../_API/services'
import { getProfile } from '../_API'
import ViewPersonalProfile from './viewPersonalProfile'
import EditPersonalProfile from './editPersonalProfile'
import ViewProfilePreferences from './viewProfilePreferences'
import EditProfilePreferences from './editProfilePreferences'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.auth= new AuthService()
    this.state = {
      userID: this.auth.getUserId(),
      editPersonal: false, //toggles from view to edit if true
      editPreferences: false, //toggles from view to edit if true
      profile: {
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        home_owner: '',
        car_owner: '',
        pet_owner: '',
        misc: '',
        financial: '',
        medical: '',
      }
    }
  }
  render() {
    const { home_owner, car_owner, pet_owner, misc, medical, financial } = this.state.profile
    return (
      <main>
        <h1 className="greeting">My Profile</h1>
        <section className="profileContainer">
          <div className="profilePersonal">
            {this.state.editPersonal
              ? <EditPersonalProfile
                  profile={this.state.profile}
                  handlePersonalClick={this.handlePersonalClick}
                  refresh={this.refreshProfile}
                  X={this.state.editPersonal}
                />
              : <ViewPersonalProfile
                  profile={this.state.profile}
                  handlePersonalClick={this.handlePersonalClick}
                  refresh={this.refreshProfile}
                  X={this.state.editPersonal}
                />
            }

          </div>
          <div className="profilePreferences">
            {this.state.editPreferences
              ? <EditProfilePreferences
                  profile={this.state.profile}
                  handlePreferencesClick={this.handlePreferencesClick}
                  refresh={this.refreshProfile}
                  X={this.state.editPreferences}
                />
              : <ViewProfilePreferences
                home_owner={home_owner}
                car_owner={car_owner}
                pet_owner={pet_owner}
                misc={misc}
                financial={financial}
                medical={medical}
                handlePreferencesClick={this.handlePreferencesClick}
                refresh={this.refreshProfile}
                X={this.state.editPreferences}
              />
            }

          </div>
        </section>
      </main>
    )
  }

  componentDidMount() {
    getProfile(this.auth.getUserId())
    .then(APIprofile => {
      console.log(APIprofile);
      this.setState({profile: APIprofile})
    })
  }

  handlePersonalClick = () => {
    this.setState({editPersonal: !this.state.editPersonal})
  }

  handlePreferencesClick = () => {
    this.setState({editPreferences: !this.state.editPreferences})
  }

  refreshProfile = () => {
    getProfile(this.auth.getUserId())
    .then(APIprofile => {
      console.log(APIprofile);
      this.setState({profile: APIprofile})
    })
  }

}

export default Profile;
