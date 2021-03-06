import React, { Component } from 'react';
import './styles.css'

class Instructions extends Component {
  render() {
    return (
      <main>
        <section>
          <h1 className="greeting"> {/*from App.css*/}
              Instructions:
          </h1>
        </section>
        <div className="body">
            <section className="gettingStartedContainer">
                <div className="gettingStarted">
                    <h3 className="title">
                        Getting Started:
                    </h3>
                    <p className="content">
                        When registering for your account, you can choose if you
                         own a house, car, or dog in order to help us filter
                         tasks that better apply to you.
                    </p>
                </div>
                <aside>
                    <img src="images/00registration.png"></img>
                </aside>
            </section>
            <hr />
            <section className="profileContainer">
                <aside>
                    <img src="images/02Profile.png"></img>
                        <br/ >
                        <br/ >
                    <img src="images/03profilePreferences.png"></img>
                </aside>
                <div className="profile">
                    <h3 className="title">
                        Your Settings/Profile:
                    </h3>
                    <p className="content">
                        There is a section of our site that is accessed by the
                        "Settings" link that allows you to edit your profile
                        information as well as preferences.
                        <br/ >
                        <br/ >
                        Click on the links next to "Personal Info" or "Task
                        Preferences" in order to edit the information they
                        contain.
                    </p>
                    <br/ >
                </div>
            </section>
            <hr />
            <section  className="remindersContainer">
                <div className="reminders">
                    <h3 className="title">
                        Assigning Reminders from the Database:
                    </h3>
                    <p className="content">
                        Navigate to the database of tasks you can be reminded of
                         by clicking the "Add Task" button on the header. Now,
                         click the "Add" button on any card in the database of
                         tasks. You will be prompted to fill in date, time,
                         frequency, and make any notes you wish to about the
                         task. Please not that all fields except notes are
                         required to create a reminder.
                        <br/ >
                        <br/ >
                        You can sort through all the tasks using hte tabs above
                        to narrow your search by catigory.
                    </p>
                </div>
                <aside>
                    <img src="images/04taskIndexTabs.png"></img>
                    <br/ >
                    <br/ >
                    <img src="images/05taskIndexAdd.png"></img>
                </aside>
            <br/ >
            </section>
            <hr />
            <section className="dashboardContainer">
                <aside>
                    <img src="images/06dashboard.png"></img>
                    <br/ >
                    <br/ >
                    <img src="images/07dashboardEditDelete.png"></img>
                </aside>
                <br/ >
                <br/ >
                <div className="dashboard">
                    <h3 className="title">
                        Your Dashboard:
                    </h3>
                    <p className="content">
                        This is where you see all the tasks you have associated
                        with reminders.
                        <br/ >
                        <br/ >
                        You can sort tasks by when they are due using the tabs
                        on the top. By default you will always be shown first
                        what is due on the current day or is overdue.
                        <br/ >
                        <br/ >
                        The button in the lower left corner of each task card
                        in your dashboard is a link to either edit or delete
                        the reminders for that task.
                        <br/ >
                        <br/ >
                        You may make changes to any or all of the fields here
                        and then accept the changes or you may delete the
                        reminder off your list completely.
                        <br/ >
                        <br/ >
                        Clicking the checkbox found in the lower right corner
                        of the task card while in your dashboard view will mark
                        it as completed and you will be reminded according to
                        the interval you chose when setting up the task.
                    </p>
                </div>
            </section>
            <br/ >
            <br/ >
        </div>
      </main>
    )
  }
}

export default Instructions;
