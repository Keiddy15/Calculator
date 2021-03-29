const calculator = document.querySelector(".calculator"); //To listen when is pressed a number
const keys = calculator.querySelector(".calculator-content-row"); //To listen when is pressed an operator
const display = document.querySelector("#calculator-text")
var total = 0, subtotal = [], rest = 0;
//To add an action when is pressed any key
keys.addEventListener("click", e => {
    if (e.target.matches("input")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.value;
        const displayedNum = display.textContent;
        if (!action) {
          if (displayedNum == "0") {
            display.textContent = keyContent;
          }else{
            display.textContent = displayedNum + keyContent;
          }
        }
        if (action == '+' || action == '-' || action == '*' || action == '/') {
            display.textContent = displayedNum + action;
        }
        if (action == 'decimal') {
            display.textContent = displayedNum + ".";
        }
          
        if (action == 'clear') {
            display.textContent = "0";
        }  
        if (action == 'calculate') {  
            display.textContent = eval(display.textContent)
        }
    }
    
})

