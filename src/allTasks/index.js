import React, { Component } from 'react';
import { getTasks, createMyTask } from '../_API'
import TaskCard from './taskCard'
import './styles.css'


class AllTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 6,
      newTaskSuccess: false,
      task_index: [],
      my_tasks: []
    }
  }

  render() {
    const { task_index } = this.state
    const houseTasks = task_index.filter(el => el.category === "House")
    const carTasks = task_index.filter(el => el.category === "Car")
    const medicalTasks = task_index.filter(el => el.category === "Medical")
    const financialTasks = task_index.filter(el => el.category === "Money")
    const petTasks = task_index.filter(el => el.category === "Pets")
    const miscellaneousTasks = task_index.filter(el => el.category === "Miscellaneous")

    return (
      <main>
        <section>
          <h1 className="greeting"> {/*from App.css*/}
          Tasks You Can Add:
          </h1>
        </section>
        <div className="table"> {/*from App.css*/}
        <section className="tabsContainer">
            <section className="taskTabsContainer"> {/*from App.css*/}
                <div onClick={() => this.tabClick(0)} className="categoryTab todayTab"> {/*from App.css*/}
                  House
                </div>
                <div onClick={() => this.tabClick(1)} className="categoryTab">
                  Car
                </div>
                <div onClick={() => this.tabClick(2)} className="categoryTab">
                  Medical
                </div>
                <div onClick={() => this.tabClick(3)} className="categoryTab">
                  Financial
                </div>
                <div onClick={() => this.tabClick(4)} className="categoryTab">
                  Pets
                </div>
                <div onClick={() => this.tabClick(5)} className="categoryTab">
                  Miscellaneous
                </div>
                <div onClick={() => this.tabClick(6)} className="categoryTab">
                  All Tasks
                </div>
            </section>
        </section>
        <section className="taskTileContainer"> {/*from App.css*/}
        {(() => {
                switch(this.state.activeTab) {
                  case 0:
                    return houseTasks.length > 0
                      ?  houseTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No house tasks.</h3>
                  case 1:
                    return carTasks.length > 0
                      ?  carTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No car tasks.</h3>
                  case 2:
                    return medicalTasks.length > 0
                      ?  medicalTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                        })
                        : <h3>No medical tasks.</h3>
                  case 3:
                    return financialTasks.length > 0
                      ?  financialTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No finacial tasks.</h3>
                  case 4:
                    return petTasks.length > 0
                      ?  petTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No pet tasks.</h3>
                  case 5:
                    return miscellaneousTasks.length > 0
                      ?  miscellaneousTasks.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No tasks.</h3>
                  case 6:
                    return task_index.length > 0
                      ?  task_index.map((el, i) => {
                        return <TaskCard key={i} info={el} handleNewMyTaskObject={this.handleNewMyTaskObject} userID={this.props.userID}/>
                      })
                      : <h3>No tasks.</h3>
                }
            })()}

        </section>
        </div>
      </main>
    );
  }

  componentDidMount() {
    getTasks()
    .then(APItasks => {
      this.setState({
        task_index: APItasks
      })
    })
  }

  tabClick = (tabNum) => {
    this.setState({
      activeTab: tabNum
    })
    console.log(tabNum);
  }

  handleNewMyTaskObject = (newMyTaskObject) => {
    createMyTask(newMyTaskObject)
    .then(resp => {
    })
    this.setState({ newTaskSuccess: true})
  }
}

export default AllTasks;
