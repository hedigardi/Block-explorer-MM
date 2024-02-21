import { sendFunds } from './sendFunds';

describe('SendFunds', () => {
  it('should handle errors gracefully', async () => {
    // Mocka ethereum-objektet
    const ethereum = {
      request: jest.fn()
    };

    // Mocka inputvärden
    const accountInput = { value: '0xabcdef' };
    const toAccountInput = { value: '0x987654' };
    const valueInput = { value: '10' }; // Antar att värdet är 10

    // Mocka elementet för visningsmeddelande
    const displayMsg = {};

    // Anropa sendFunds-funktionen
    await sendFunds(ethereum, accountInput, toAccountInput, valueInput, displayMsg);

    // Konvertera det förväntade värdet till hexadecimalt format
    const expectedValue = (parseInt(valueInput.value) * Math.pow(10, 18)).toString(16);

    // Förväntningar
    expect(ethereum.request).toHaveBeenCalledWith({
      method: 'eth_sendTransaction',
      params: [{
        from: '0xabcdef',
        gas: '5208',
        gasPrice: '2625a0',
        to: '0x987654',
        value: expectedValue // Uppdaterat förväntat värde i hexadecimalt format
      }]
    });
  });
});
