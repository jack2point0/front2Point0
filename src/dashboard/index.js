import React, { Component } from 'react';
import { getMyTasks } from '../_API'
import AuthService from '../_API/services';
import MyTaskCard from './myTaskCard';
import './styles.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      myTasks: [],
      activeTab: 0,
      successMsg: ''
    }
  }

  render(){
    const { myTasks } = this.state
    const today = new Date()
    const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(),
     today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
    const homeTasks = myTasks.filter(el => el.task.category === "House")
    const carTasks = myTasks.filter(el => el.task.category === "Car")
    const todayTasks = myTasks.filter((el) => {
      const temp = new Date(el.my_task.due_date)
      const tempUTC = Date.UTC(temp.getUTCFullYear(), temp.getUTCMonth(), temp.getUTCDate(),
       temp.getUTCHours(), temp.getUTCMinutes(), temp.getUTCSeconds());
      return tempUTC === todayUTC || tempUTC < todayUTC
    })

    const next30Days = myTasks.filter((el) => {
      const temp = new Date(el.my_task.due_date)
      const tempUTC = Date.UTC(temp.getUTCFullYear(), temp.getUTCMonth(), temp.getUTCDate(),
       temp.getUTCHours(), temp.getUTCMinutes(), temp.getUTCSeconds());
      return tempUTC < this.addDays(todayUTC, 30) && tempUTC > todayUTC
    })

    const next3Months = myTasks.filter((el) => {
      const temp = new Date(el.my_task.due_date)
      const tempUTC = Date.UTC(temp.getUTCFullYear(), temp.getUTCMonth(), temp.getUTCDate(),
       temp.getUTCHours(), temp.getUTCMinutes(), temp.getUTCSeconds());
      return tempUTC < this.addDays(todayUTC,90)
    })
    return (
      <main>
        <section>
          <h1 className="greeting"> {/*from App.css*/}
          Dashboard:
          </h1>
        </section>
        <div className="table"> {/*from App.css*/}
        <section>
            <section className="taskTabsContainer"> {/*from App.css*/}
                <div onClick={() => this.tabClick(0)} className="categoryTab todayTab">{/*from App.css*/}
                  Today/Overdue
                </div>
                <div onClick={() => this.tabClick(1)} className="categoryTab">
                  Next 30 Days
                </div>
                <div onClick={() => this.tabClick(2)} className="categoryTab">
                  Next 3 Months
                </div>

                <div onClick={() => this.tabClick(5)} className="categoryTab">
                  All My Tasks
                </div>
            </section>
        </section>

        <section className="taskTileContainer"> {/*from App.css*/}
        {(() => {
                switch(this.state.activeTab) {
                  case 0:
                    return todayTasks.length > 0
                      ?  todayTasks.map((el, i) => {
                          return (
                            <MyTaskCard
                            key={i}
                            info={el}
                            addDays={this.addDays}
                            fetchTasks={this.fetchTasks}
                            />
                          )
                         })
                      : <h3>No tasks due today.</h3>
                  case 1:
                    return next30Days.length > 0
                      ?  next30Days.map((el, i) => {
                        return (
                          <MyTaskCard
                          key={i}
                          info={el}
                          addDays={this.addDays}
                          fetchTasks={this.fetchTasks}
                          />
                        )
                      })
                      : <h3>No tasks due in next 30 days.</h3>
                  case 2:
                    return next3Months.length > 0
                      ?  next3Months.map((el, i) => {
                        return (
                          <MyTaskCard
                          key={i}
                          info={el}
                          addDays={this.addDays}
                          fetchTasks={this.fetchTasks}
                          />
                        )
                        })
                      : <h3>No tasks due in next 90 Days.</h3>
                  case 3:
                    return homeTasks.length > 0
                      ?  homeTasks.map((el, i) => {
                        return (
                          <MyTaskCard
                          key={i}
                          info={el}
                          addDays={this.addDays}
                          fetchTasks={this.fetchTasks}
                          />
                        )
                      })
                      : <h3>Home.</h3>
                  case 4:
                    return carTasks.length > 0
                      ?  carTasks.map((el, i) => {
                        return (
                          <MyTaskCard
                          key={i}
                          info={el}
                          addDays={this.addDays}
                          fetchTasks={this.fetchTasks}
                          />
                        )
                      })
                      : <h3>Car.</h3>
                  case 5:
                    return myTasks.length > 0
                      ?  myTasks.map((el, i) => {
                        return (
                          <MyTaskCard
                          key={i}
                          info={el}
                          addDays={this.addDays}
                          fetchTasks={this.fetchTasks}
                          />
                        )
                      })
                      : <h3>
                          You do not have any tasks assigned to you.
                          Click "Add Tasks" in the header to assign
                          yourself tasks.
                        </h3>
                }
            })()}

        </section>
        </div>
      </main>
    );
   }

   componentDidMount = () => {
     this.fetchTasks();
   }

   addDays = function(today, days) {
     const date = new Date(today)
     const dateInDays = date.getDate()
     date.setDate(dateInDays + days);
     return date;
   }

   tabClick = (tabNum) => {
     this.setState({
       activeTab: tabNum
     })
     console.log(tabNum);
   }

   fetchTasks = () => {
     const thisUserID = this.auth.getUserId()
     console.log(thisUserID);
     if (thisUserID !== null && thisUserID !== undefined && thisUserID.length > 0) {
       getMyTasks(thisUserID)
     .then((APImyTasks)=> {
       // let { myTasks } = this.state
       this.setState({
         myTasks: APImyTasks,
         userID: thisUserID
       })
       })
     }
   }

}

export default Dashboard;
