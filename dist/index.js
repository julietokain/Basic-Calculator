let displayEl = document.getElementById("display");
let btnEl = Array.from(document.getElementsByClassName("btnOperator"));

btnEl.forEach((btnOperator) => {
  btnOperator.addEventListener("click", (e) => {
      console.log("clicked", e.target.innerText);
    switch (e.target.innerText) {
      case "AC":
        displayEl.innerText = "";
        break;
      case "=":
        try {
          displayEl.innerText = eval(displayEl.innerText);
        } catch {
          displayEl.innerText = "Error";
        }
        break;
      case "DEL":
        if (displayEl.innerText) {
          displayEl.innerText = displayEl.innerText.slice(0, -1);
        }
        break;
      default:
        displayEl.innerText += e.target.innerText;
    }
  });
});
