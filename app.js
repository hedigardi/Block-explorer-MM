// Import transaction functions
import { checkBalance } from './balance.js';
import { fetchLatestTransaction, createTransactionList } from './transaction.js';
import { sendFunds } from './sendFunds.js';

// Selecting DOM elements
const accountInput = document.querySelector('#account');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#send');
const toAccountInput = document.querySelector('#toAccount');
const valueInput = document.querySelector('#amount');
const displayMsg = document.querySelector('#sendMsg');
let transactionList = document.querySelector('#transactions');

// Event listener for DOMContentLoaded event to display latest transaction
document.addEventListener('DOMContentLoaded', async () => {
    const latestTransaction = await fetchLatestTransaction(ethereum);
    if (latestTransaction) {
        createTransactionList(latestTransaction, transactionList);
    } else {
        transactionList.innerHTML = 'No latest transaction found.';
    }
});

// Event listener for check balance button click
checkBalanceButton.addEventListener('click', async () => {
    await checkBalance(ethereum, displayBalance);
});

// Event listener for send button click
sendButton.addEventListener('click', async () => {
    await sendFunds(ethereum, accountInput, toAccountInput, valueInput, displayMsg);
});
