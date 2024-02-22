import { sendFunds } from './sendFunds.js';
import { describe, test, expect } from 'vitest';

describe('SendFunds', () => {
  test('should handle errors gracefully', async () => {
    const ethereum = {
      request: async () => {}
    };

    const accountInput = { value: '0xabcdef' };
    const toAccountInput = { value: '0x987654' };
    const valueInput = { value: '10' };

    const displayMsg = {};

    await sendFunds(ethereum, accountInput, toAccountInput, valueInput, displayMsg);

    const expectedValue = (parseInt(valueInput.value) * Math.pow(10, 18)).toString(16);
  });
});
