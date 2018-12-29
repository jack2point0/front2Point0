import React, { Component } from 'react';
import { getProfile } from '../_API';
import AuthService from '../_API/services';
import AcceptButton from './acceptButton'


class TaskExpansionRow extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService();
    this.state = {
      form: {
        time: '',
        my_task: {
          task_id: this.props.info.id,
          user_id: this.props.userID,
          due_date: '',
          frequency: '',
          completed: false,
          notes: '',
          exact_time: '',
        }
      }
    }
  }

  render() {
    console.log(this.state.form);
    console.log(this.props);
    return (
      <tr className="expansionContainer">
        <td>
          <label>Due Date:</label>
          <br/>
          <input
            className="expansionInput"
            type="date"
            name="due_date"
            onChange={this.handleMyTaskChange}
            required
            />
        </td>
          <br/>
        <td>
          <label>Time (PST):</label>
          <br/>
          <input
            className="expansionInput"
            type="time"
            name="time"
            onChange={this.handleFormChange}
            required
            />
        </td>
          <br/>
        <td>
          <label>How often (days)?:</label>
          <br/>
          <input
            className="expansionInput"
            type="number"
            name="frequency"
            onChange={this.handleMyTaskChange}
            pattern="[0-9]"
            required
            />
        </td>
          <br/>
        <td>
          <label>Notes:</label>
          <br/>
          <textarea
            onChange={this.handleMyTaskChange}
            required
            rows="4" cols="28" name="notes"
            >
          </textarea>
        </td>
          <br/>
        <td>
            <AcceptButton accept={this.handleSubmit} />
        </td>
      </tr>
    );
  }

  handleMyTaskChange = (e) => {
    console.log(e.target.name);
    const { form } = this.state
    form.my_task[e.target.name] = e.target.value
    this.setState({form})
  }

  handleFormChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.state
    form.my_task.exact_time = `${form.my_task.due_date}T${form.time}:00.000Z`
    console.log(form);
    this.props.handleNewMyTaskObject(form)
    this.props.toggle()
  }

}

export default TaskExpansionRow;
