// reference
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
    const heading = document.querySelector('h1');
    button.addEventListener("click", function (event) {
    
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px white;"
        heading.style = "text-shadow: -2px -2px 3px gray;"
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px tomato;"
        heading.style = "text-shadow: -2px -2px 3px white;"
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px white;"
        heading.style = "text-shadow: -2px -2px 3px blue;"
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px tomato;"
        heading.style = "text-shadow: -2px -2px 3px yellow;"
        break;
      case "tomato":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px white;"
        heading.style = "text-shadow: -2px -2px 3px tomato;"
        break;
      case "purple":
        body.style.backgroundColor = event.target.id;
        heading.style = "box-shadow: 0 0 10px white;"
        heading.style = "text-shadow: -2px -2px 3px purple;"
        break;

      default:
        body.style.backgroundColor = "white";
        heading.style = "box-shadow: 0 0 10px goldenrod;"
        break;
    }
  });
});
