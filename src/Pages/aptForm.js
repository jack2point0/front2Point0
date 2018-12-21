import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { createAppointment } from '../API/twillio'
import AuthService from '../services'

class AptForm extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      sign_inSuccess: false,
      form: {
        date: "",
        time: "",
        appointment: {
          name: "",
          phone_number: "",
          exact_time: ""
        }
      }
    }
  }
  render() {
    const { name, phone_number } = this.state.form.appointment
    const { date, time } = this.state.form
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onAppointmentChange} name="name" value={name} type="text" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPhone_Number">
            <Col componentClass={ControlLabel} sm={2}>
              Phone
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onAppointmentChange} name="phone_number" value={phone_number} type="text" placeholder="(800)555-5555" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTime">
            <Col componentClass={ControlLabel} sm={2}>
              Date
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onFormChange} name="date" value={date} type="date" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTime">
            <Col componentClass={ControlLabel} sm={2}>
              Time
            </Col>
            <Col sm={10}>
              <FormControl onChange={this.onFormChange} name="time" value={time} type="time" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
  onFormChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState ({
      form
    })
  }

  onAppointmentChange = (e) => {
    const { form } = this.state
    form.appointment[e.target.name] = e.target.value
    this.setState ({
      form
    })
  }
    onSubmit = (e) => {
    e.preventDefault()
    const { form } = this.state
    const { date, time } = this.state.form
    form.appointment.exact_time = `${date}T${time}:00.000Z`
    //"2018-12-13T11:27:00.000Z"
    createAppointment(this.state.form.appointment)
    .then(resp => {
      console.log(resp);
    })
  }
}

export default AptForm;
