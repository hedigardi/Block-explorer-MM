import { checkBalance } from './balance.js';
import { describe, test, expect } from 'vitest';

describe('Balance', () => {
  test('should handle errors gracefully', async () => {
    const ethereum = {
      request: async () => { throw new Error('Error fetching balance'); }
    };

    const displayBalance = { innerText: '' };

    await checkBalance(ethereum, displayBalance);

    expect(displayBalance.innerText).toBe('Error fetching balance');
  });
});
