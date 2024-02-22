export async function checkBalance(ethereum, displayBalance) {
    try {
        // Requesting access to the user's Ethereum accounts
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        // Getting the balance of the account
        const balance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
        // Converting balance from wei to ether and formatting it with 2 decimal places
        const parsedBalance = parseInt(balance) / Math.pow(10, 18);
        const formattedBalance = parsedBalance.toFixed(2);
        // Displaying the balance with 'ETH' appended
        displayBalance.innerText = `${formattedBalance} ETH`;
    } catch (error) {
        displayBalance.innerText = 'Error fetching balance';
    }
}
