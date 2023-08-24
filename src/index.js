import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
// Diable input from user
console.log(
  "Congratulations, you've achieved ultimate nerd status. Impressive 😂👌👍"
);
(document.onkeydown = function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}),
  false;
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}
