const stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    const key = itemName.toLowerCase();

    console.log(`Verifying the stock of ${itemName}`);

    if (stock.hasOwnProperty(key)) {
        if (stock[key] > 0) {
            callbackPayment(itemName);
        } else {
            callbackError(itemName);
        }
    } else {
        console.log(`${itemName} is not offered`);
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter the item you would like to purchase (Macbook, iPhone): ", item => {
    processOrder(item, processPayment, processError);
    readline.close();
});
