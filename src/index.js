// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const hello = document.querySelector("h2");

const superEventHandler = {
  handleResize: function (event) {
    hello.style.color = colors[1];
    hello.innerText = "You just resized!";
  },
  handleRightClick: function () {
    hello.style.color = colors[4];
    hello.innerText = "That was a right click!";
  },
  handleMouseOn: function () {
    hello.style.color = colors[2];
    hello.innerText = "The mouse is here!";
  },
  handleMouseOff: function () {
    hello.style.color = colors[3];
    hello.innerText = "The mouse is gone!";
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
hello.addEventListener("mouseenter", superEventHandler.handleMouseOn);
hello.addEventListener("mouseleave", superEventHandler.handleMouseOff);
hello.addEventListener("contextmenu", superEventHandler.handleRightClick);
