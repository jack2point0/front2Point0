import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import AuthService from '../services'

class Sign_In extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      errors: [],
      form: {
        user: {
          email: "",
          password: "",
        }
      }
    }
  }
  render() {
    const { email, password } = this.state.form.user
    let errorMsgs =[]
    if(Object.keys(this.state.errors).length > 0){
      Object.entries(this.state.errors).forEach(entry => {
        let key
        let value

        switch(entry[1]){
          case "You need to sign in or sign up before continuing.":
            key= "";
            value = "Username and Password are required fields"
            console.log("case 1");
            break
          case "Invalid Email or password.":
            key = ""
            value = entry[1]
            console.log("case 2");
            break
          default:
            key = entry[0]
            value = entry[1]
            console.log("default");
            break
        }

        errorMsgs.push(`${key} ${value}`)
      })
    }
      return (
          <div>
            <h1 className="greeting">
              Sign In:
            </h1>
            <h3 className="errors">
              {errorMsgs[0]}
            </h3>
            <Form horizontal onSubmit={this.onSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email:
                </Col>
                <Col sm={10}>
                  <FormControl onChange={this.onChange} name="email" value={email} type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password:
                </Col>
                <Col sm={10}>
                  <FormControl onChange={this.onChange} name="password" value={password} type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup className="regButtonContainer">
                <Col smOffset={2} sm={10}>
                  <button
                    className="regButton" type="submit">
                      Sign In
                  </button>
                </Col>
              </FormGroup>
            </Form>
          </div>
      )
  }

  // componentDidMount() {
  //   this.props.refresh()
  // }
    onChange = (e) => {
    const { form } = this.state
    form.user[e.target.name] = e.target.value
    this.setState ({
      form
    })
  }
    onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.form);
    this.auth.sign_in(this.state.form)
    .then(status => {
      console.log(status);
      if(status.error != null) {
        console.log("ERRORRRS",status);
        this.setState({errors: status})
      } else {
        this.props.refresh()
      }
    })
  }
}

export default Sign_In;
