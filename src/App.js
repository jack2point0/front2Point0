import React, { Component } from 'react';
import { getMyTasks } from './_API';
import AuthService from './_API/services'
import Home from './home'
import Dashboard from './dashboard'
import Registration from './registration'
import SignIn from './signIn'
import Instructions from './instructions'
import Profile from './profile'
import AllTasks from './allTasks'
import EditMyTaskCard from './dashboard/editMyTaskCard'
import Header from './header'
import Footer from './footer'
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
    constructor(props) {
      super(props)

      this.auth = new AuthService()
      this.state = {
        marginRight: 0,
        authenticated: this.auth.loggedIn(),
        hasToken: false,
        myTasks: [],
        userID: ''
      }
    }

  render() {
    return (
      <div style={{marginRight: this.state.marginRight}} className="b">
        <Header openSideMenu={this.openSideMenu}/>
        <div className="b">
          <Router>
            {
              (this.auth.loggedIn()) ?
              <Switch> //protected paths
                <Redirect from="/register" to="/" />
                <Redirect from="/login" to="/" />
                <Route exact path='/user/my_tasks/:id/edit' render={(routeProps) => <EditMyTaskCard refresh={this.refresh} {...routeProps}/>} />
                <Route exact path='/instructions' component={Instructions} />
                <Route exact path='/profile' render={(routeProps) => <Profile refresh={this.refresh} {...routeProps}/>} />
                <Route exact path='/tasks' render={(props) => <AllTasks userID={this.state.userID} />} />
                <Route path='/' render={(props) => <Dashboard myTasks={this.state.myTasks} />} />
              </Switch>

              :
              <Switch> //public paths
                <Route exact path='/login' render={(props) => <SignIn refresh={this.refresh}/>} />
                <Route exact path='/register' render={(props) => <Registration refresh={this.refresh}/> }/>
                <Route path='/' component={Home} />
              </Switch>
            }
          </Router>
        </div>
          <footer >
            <Footer />
          </footer>
      </div>
    );
  }



  componentDidMount = () => {
    let thisUserID = this.auth.getUserId()
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

  openSideMenu = () => {
    console.log("made it in");
    let { marginRight } = this.state
    marginRight = marginRight === 0 ? 200 : 0
    this.setState({
      marginRight: marginRight
    })
  }

  refresh = () => {
    this.setState ({
      authenticated: this.auth.loggedIn()
    })
  }
}

export default App;
