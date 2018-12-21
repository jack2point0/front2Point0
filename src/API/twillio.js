import AuthService from '../services';
const auth = new AuthService();

const BASE = process.env.REACT_APP_API_URL

let getAppointments = function() {
  console.log("got to twillio api");
  return auth.authFetch(BASE + '/appointments')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

let createAppointment = function(obj) {
  console.log(obj);
  return auth.authFetch(BASE + `/appointments`, {
    body: JSON.stringify(obj),
    method: "POST"
  })
  .then((resp) => {
    let json = resp.json()
    console.log(json);
    return json
  })
}

export { getAppointments, createAppointment }
