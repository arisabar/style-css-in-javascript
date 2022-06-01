const bodyDiv = document.createElement("div");

//todo style body
bodyDiv.style.backgroundColor = "aqua";
bodyDiv.style.width = "auto";
bodyDiv.style.height = "500px";
bodyDiv.style.display = "flex";
bodyDiv.style.padding = "2rem";

const startButton = document.createElement("button");
const startButtonValue = document.createTextNode("start game");
startButton.appendChild(startButtonValue);
bodyDiv.appendChild(startButton);

//todo style button
startButton.style.backgroundColor = "transparent";
startButton.style.color = "black";
startButton.style.marginLeft = "auto";
startButton.style.marginRight = "auto";
startButton.style.width = "auto";
startButton.style.height = "50px";
startButton.style.textTransform = "uppercase";
startButton.style.borderRadius = "10px";
startButton.style.cursor = "pointer";

const wrapperDiv = document.createElement("div");
const heading3 = document.createElement("h3");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
wrapperDiv.appendChild(heading3);
wrapperDiv.appendChild(btn1);
wrapperDiv.appendChild(btn2);
wrapperDiv.appendChild(btn3);

//todo style wrapper div
wrapperDiv.style.backgroundColor = "lightgreen";
wrapperDiv.style.width = "auto";
wrapperDiv.style.margin = "1rem";
wrapperDiv.style.height = "auto";

//todo style heading3
heading3.innerText = `Change color background!`;

//todo style button 1

//todo style button 2
//todo style button 3

startButton.addEventListener("click", () => {
  bodyDiv.appendChild(wrapperDiv);
});
// function newCSS(syntax, bgcolor, color, w, h) {
//   let element = syntax;
//   element.style.backgroundColor = bgcolor;
//   element.style.color = color;
//   element.style.width = w;
//   element.style.height = h;
// }

//todo show the pop up
showBoxBody();
function showBoxBody() {
  console.log("showbox");
  setTimeout(() => {
    if (confirm("Press a button to show up!")) {
      document.body.prepend(bodyDiv);
    } else {
      alert("you field to show body!");
    }
  }, 1000);
}
