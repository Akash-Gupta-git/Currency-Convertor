// let exchangeRate = document.querySelector("."user-input")
// let exchangeRate = document.querySelector("")
// let exchangeRate = document.querySelector("")
// const exchangeRate = {
//     "Indian" {

//     }
// }


// script.js

// Exchange rates (for example purposes, you can update with real-time data from APIs)
const exchangeRates = {
    "Indian": {
        "Dollar": 0.012,
        "Euro": 0.011,
        "Pound": 0.0098,
        "Dinar": 0.0037,
        "Rial": 0.045,
        "Indian": 1
    },
    "Dollar": {
        "Indian": 83.55,
        "Euro": 0.92,
        "Pound": 0.81,
        "Dinar": 0.31,
        "Rial": 3.75,
        "Dollar": 1
    },
    "Euro": {
        "Indian": 90.96,
        "Dollar": 1.08,
        "Pound": 0.88,
        "Dinar": 0.34,
        "Rial": 4.06,
        "Euro": 1
    },
    "Pound": {
        "Indian": 103.52,
        "Dollar": 1.24,
        "Euro": 1.14,
        "Dinar": 0.39,
        "Rial": 4.61,
        "Pound": 1
    },
    "Dinar": {
        "Indian": 270.50,
        "Dollar": 3.27,
        "Euro": 2.95,
        "Pound": 2.56,
        "Rial": 11.80,
        "Dinar": 1
    },
    "Rial": {
        "Indian": 22.28,
        "Dollar": 0.27,
        "Euro": 0.25,
        "Pound": 0.22,
        "Dinar": 0.085,
        "Rial": 1
    }
};

document.querySelector('.submit').addEventListener('click', function() {
  
    const amount = parseFloat(document.querySelectorAll('.user-input')[0].value);
    const fromCurrency = document.querySelectorAll('select')[0].value;
    const toCurrency = document.querySelectorAll('select')[1].value;
    
    
    if (isNaN(amount)) {
        alert("Please enter a valid number.");
        return;
    }

    // Calculate the conversion
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    // Display the converted amount in the second input field
    document.querySelectorAll('.user-input')[1].value = convertedAmount;
});
