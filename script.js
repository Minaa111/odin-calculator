const display = document.querySelector('.calc-display');

function appendToDisplay(input){
    display.textContent += input; // Update textContent instead of value
}

function clearDisplay(){
    display.textContent = ''; // Update textContent instead of value
}

function calculate(){
    try{
        let result = eval(display.textContent);
        if (!isFinite(result)) {
            throw new Error('Cannot divide by zero');
        }
        display.textContent = result;
    }
    catch(error){
        display.textContent = 'Error';
    }
}
