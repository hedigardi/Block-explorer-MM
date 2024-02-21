import { checkBalance } from './balance.js';

describe('Balance', () => {
  it('should handle errors gracefully', async () => {
    // Mocka Ethereum-objektet för att returnera ett fel
    const ethereum = {
      request: jest.fn().mockRejectedValue(new Error('Error fetching balance'))
    };

    // Mocka DOM-elementet
    const displayBalance = { innerText: '' };

    // Kör funktionen
    await checkBalance(ethereum, displayBalance);

    // Förväntningar
    expect(ethereum.request).toHaveBeenCalledWith({ method: 'eth_requestAccounts' });
    expect(displayBalance.innerText).toBe('Error fetching balance');
  });
});