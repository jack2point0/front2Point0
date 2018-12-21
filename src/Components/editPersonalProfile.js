import React, { Component } from 'react';
import { Form, FormGroup, Col } from 'react-bootstrap';
import { editProfile } from '../API'


class EditPersonalProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        profile: {
          id: '',
          first_name: '',
          last_name: '',
          phone: ''
        }
      }
    }
}
  render() {
    const { profile } = this.state.form
    return (
      <main>
        <div>
          <section className="profileTitle">
            <h2>Edit Info</h2>
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
              <Form className="editPersonal">
                <FormGroup controlId="formHorizontalFirstName">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="first_name"
                      value={profile.first_name}
                      type="FirstName"
                      placeholder="First Name"
                      />
                      <br/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalLastName">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="last_name"
                      value={profile.last_name}
                      type="LastName"
                      placeholder="Last Name"
                      />
                      <br/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPhone">
                  <Col sm={10}>
                    <input
                      className="profile"
                      onChange={this.handleChange}
                      name="phone"
                      value={profile.phone}
                      type="phone"
                      placeholder="+11234567890"
                      />
                      <br/>
                  </Col>
                </FormGroup>
              </Form>
            </section>
          </section>
          <section className="acceptPersonalBtn">
            <i id="personalCheck" className="far fa-check-square fa-3x icon" onClick={this.handleSubmit}></i>
          </section>
        </div>
      </main>
    )
  }

  componentDidMount(){
    const { form } = this.state
    const { profile } = this.props
    form.profile = profile
    this.setState({form})
  }

  handleChange = (e) => {
    const { form } = this.state
    form.profile[e.target.name] = e.target.value
    this.setState({form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    editProfile(this.state.form.profile)
    .then(resp => {
      this.props.handlePersonalClick()
      this.props.refresh()
    })

  }
}

export default EditPersonalProfile;
