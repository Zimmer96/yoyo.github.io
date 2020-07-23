// login button event handler
const loginBtn = document.getElementById('enter');
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transArea = document.getElementById('transaction-area');
    transArea.style.display = 'block';
})
// withdraw and deposite button



const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click", function() {
    const depositNumber = getInput("depositAmount")


UpdateBalance("currentDeposit",depositNumber);
UpdateBalance("currentBalance",depositNumber);
document.getElementById("depositAmount").value = "";
})
// withdraw and deposite button
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function() {
const withdrawNumber = getInput("withdrawAmount")

UpdateBalance("currentWithdraw",withdrawNumber);
UpdateBalance("currentBalance", -1*withdrawNumber);

document.getElementById("withdrawAmount").value = "";
})
function getInput(id) {
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}
function UpdateBalance(id,depositNumber) {
    const current = document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const totalAmount = currentNumber + depositNumber;
document.getElementById(id).innerText = totalAmount; 
}