import AuthService from '../_API/services';
const auth = new AuthService();

const BASE = process.env.REACT_APP_API_URL


let getTasks = function() {
  console.log("got to api");
  return auth.authFetch(BASE + '/tasks')
  .then((resp) => {
    if(resp.errors) {
      console.log(resp);
    }
    let json = resp.json()
    console.log(json);
    return json
  })
}

let createMyTask = function(obj) {
  console.log(obj);
  return auth.authFetch(BASE + `/my_tasks`, {
    body: JSON.stringify(obj),
    method: "POST"
  })
  .then((resp) => {
    let json=resp.json()
    console.log(json);
    return json
  })
}

let getMyTasks = function(userid) {
  return auth.authFetch(BASE+ `/user/my_tasks/${userid}`)
  .then((resp) => {
    let json = resp.json();
    return json
  })
}

let getMyTask = function(my_task_id){
  return auth.authFetch(BASE + `/my_tasks/${my_task_id}`)
  .then(resp => {
    let json = resp.json()
    return json
  })
}

let editMyTask = function(myTaskObj) {
  console.log(myTaskObj.id)
  return auth.authFetch(BASE + `/my_tasks/${myTaskObj.id}`, {
    method: "PATCH",
    body: JSON.stringify(myTaskObj),
  })
  .then(resp => {
    let json = resp
    console.log(json)
    return json
  })
}

let deleteMyTask = function(myTaskId) {
  return auth.authFetch(BASE + `/my_tasks/${myTaskId}`, {
    body: JSON.stringify(myTaskId),
    method: "DELETE"
  })
  .then(resp => {
    let json = resp
    console.log(json)
    return json
  })
}

let getProfile = function(userID) {
  return auth.authFetch(BASE + `/profiles/${userID}`)
  .then(resp => {
    let json = resp.json()
    return json
  })
}

let editProfile = function(profileObj) {
  console.log(profileObj)
  return auth.authFetch(BASE + `/profiles/${profileObj.id}`, {
    method: "PATCH",
    body: JSON.stringify(profileObj),
  })
  .then(resp => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

export {
  getTasks,
  createMyTask,
  getMyTasks,
  getMyTask,
  editMyTask,
  deleteMyTask,
  getProfile,
  editProfile
}
