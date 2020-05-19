// Imports
import axios from "axios";

const apiURL = "https://api.freud-online.co.uk/";

export function minDate() {
  let date = new Date();
  date.setTime(date.getTime() + 86400000);
  let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
  let month =
    date.getMonth() > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  return `${date.getFullYear()}-${month}-${day}`;
}
export function checkDate() {
  let date = new Date();
  date.setTime(date.getTime() + 86400000);
  let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
  let month =
    date.getMonth() > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  return `${month}/${day}/${date.getFullYear()}`;
}

export function submitForm(state, data, requestURL) {
  return axios
    .post(apiURL + requestURL, data)
    .then((res) => {
      return res.request.responseText;
    })
    .catch((err) => {
      if (err.message === "Network Error") {
        return "The server is currently experiencing network difficulties. Please try again later";
      }

      return err.request.responseText;
    });
}
