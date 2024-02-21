// Function to fetch the latest transaction from the blockchain
export async function fetchLatestTransaction(ethereum) {
    try {
        // Get the latest block number
        const latestBlockNumber = await ethereum.request({ method: 'eth_blockNumber' });
        // Get the latest block
        const latestBlock = await ethereum.request({ method: 'eth_getBlockByNumber', params: [latestBlockNumber, true] });
        // Assuming the first transaction in the block is the latest one
        const latestTransaction = latestBlock.transactions[0];
        return latestTransaction;
    } catch (error) {
        console.error('Error fetching latest transaction:', error);
        return null;
    }
}

// Function to create a transaction list element
export function createTransactionList(transaction, transactionList) {
    transactionList.innerHTML = '';
    // Converting value from wei to ether and formatting it with 2 decimal places
    const valueInEth = transaction.value / Math.pow(10, 18);
    const formattedValue = valueInEth.toFixed(2);
    // Displaying transaction details
    transactionList.innerHTML += `  
    <span> From: ${transaction.from}</span>
    <span> To: ${transaction.to}</span>
    <span>${formattedValue} ETH</span>`;
}