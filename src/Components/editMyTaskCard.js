import React, { Component } from 'react';
import { getMyTask, editMyTask, deleteMyTask } from '../API';
import { Redirect } from 'react-router-dom'

class EditMyTaskCard extends Component {
  constructor(props){
    super(props)
    this.state={
      editSuccess: false,
      deleteSuccess: false,
      form: {
        mytask: {
          id: '',
          task_id: '',
          user_id: '',
          due_date: '',
          completed: '',
          frequency: '',
          notes: ''
        },
        task: {
          id: '',
          title: '',
          description: '',
          category: '',
          sub_category: ''
        }
      }
    }
  }
  render() {
    console.log(this.props);
    console.log(this.state.form.mytask)
    const { due_date, frequency, notes} = this.state.form.mytask
    return (
      <main>
        <section>
          <h1 className="greeting">
          Edit/Delete:
          </h1>
        </section>
        <section className="editTileContainer">
          <div className="editTile">
            <div className="editTitleTile">
                <label className="tileTitle">
                  {this.state.form.task.title}
                </label>
            </div>
            <div>
                <label className="editTileDescription">
                  {this.state.form.task.description}
                </label>
            </div>
                <td>
                  <label>
                    Due Date:
                  </label>
                  <br/>
                  <input type="date" value={due_date} name="due_date" onChange={this.handleChange} />
                </td>
                <br/>
                <td>
                  <label>
                    How often (days)?
                  </label>
                  <br/>
                  <input type="number" name="frequency" value={frequency} onChange={this.handleChange} pattern="[0-9]"/>
                </td>
                <br/>
                <td>
                    <label>
                        Notes:
                    </label>
                    <br/>
                    <textarea
                        rows="4" cols="28" value={notes} name="notes" onChange={this.handleChange}>
                    </textarea>
                </td>
                <br/>
                <div className="tileLinks">
                    <div className="editTileButtons">
                      <div className="regButton editButton" onClick={this.handleEdit}>
                        Accept
                      </div>
                      <div className="regButton deleteButton" title="Delete Task" onClick={() => this.handleDelete(this.state.form.mytask.id)}>
                        Delete
                      </div>
                    </div>
                </div>
            {this.state.editSuccess && <Redirect to="/"/>}
            {this.state.deleteSuccess && <Redirect to="/"/>}
          </div>
        </section>
      </main>
    );
  }

  componentDidMount(){
    getMyTask(this.props.match.params.id)
    .then(APImyTask => {
      this.setState({
        form: APImyTask
      })
    })
  }

  handleChange = (e) => {
    const {form} = this.state
    form.mytask[e.target.name] = e.target.value
    this.setState({form})
  }

  handleEdit = (e) => {
    e.preventDefault()
    editMyTask(this.state.form.mytask)
    .then(resp => {
      this.setState({editSuccess: true})
    })
    this.props.refresh()
  }

  handleDelete = (id) => {
    deleteMyTask(id)
    .then(resp => {
      this.setState({deleteSuccess: true})
      console.log(resp);
    })
  }
}

export default EditMyTaskCard;
