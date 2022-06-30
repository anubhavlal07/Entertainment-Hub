import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
console.clear();
// Diable input from user
// (document.onkeydown = function (event) {
//    if (event.keyCode == 123) {
//      return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//      return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
//      return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
//      return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
//      return false;
//    } else if (event.ctrlKey && event.keyCode == 85) {
//      return false;
//    }
//  }),
//    false;
//  if (document.addEventListener) {
//    document.addEventListener(
//      "contextmenu",
//      function (e) {
//        e.preventDefault();
//      },
//      false
//    );
//  } else {
//    document.attachEvent("oncontextmenu", function () {
//      window.event.returnValue = false;
//    });
//  }
 