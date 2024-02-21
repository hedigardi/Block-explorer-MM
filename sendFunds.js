// sendFunds.js
export async function sendFunds(ethereum, accountInput, toAccountInput, valueInput, displayMsg) {
    try {
        // Converting amount to wei
        const amount = parseFloat(valueInput.value) * Math.pow(10, 18);
        // Constructing transaction parameters
        const params = [{
            from: accountInput.value,
            to: toAccountInput.value,
            value: Number(amount).toString(16),
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16)
        }];
        // Sending the transaction
        const response = await ethereum.request({ method: 'eth_sendTransaction', params: params });
        // Displaying the transaction response in the specified element
        if (displayMsg) {
            displayMsg.innerHTML = 'Transaction sent!';
        }
    } catch (error) {
        if (displayMsg) {
            displayMsg.innerHTML = 'Error sending funds';
        }
    }
}
