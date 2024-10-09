function ETADate() {
    const today = new Date();
    const arrivalDate = new Date(today);
    arrivalDate.setDate(today.getDate() + 7);
    return arrivalDate.toDateString();
}

function getTime() {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good Morning";
    } else if (hours < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

alert('Welcome to Anthony\'s Store!');

const name = prompt('Enter your name: ');
const item = prompt('What item would you like to order? ');
let amount = parseInt(prompt('How many would you like to order (1-99)? '), 10);

function orderInfo(name, item, amount) {
    const greetingTime = getTime();
    const expectedArrival = ETADate();
    
    const orderDetails = `
        <h2 style="color: darkblue; text-decoration: underline;">${greetingTime}, ${name}! Thank you for your order.</h2>
        <p style="color: blue;">You ordered <strong>${amount}</strong> of <strong>${item}</strong>.</p>
        <p style="color: blue;">Your items will arrive on: <strong>${expectedArrival}</strong>.</p>
    `;
    
    document.getElementById('orderInfo').innerHTML = orderDetails;
}

if (isNaN(amount) || amount < 1 || amount > 99) {
    alert('ERROR: You either did not input a number, put a negative amount, or entered an amount we don’t have (above 99).');
} else {
    orderInfo(name, item, amount);
}