import { expect } from 'chai';
import cheerio from 'cheerio';
import { loadFixture } from './test-utils.js';

let fixture;

before(async () => {
  fixture = await loadFixture({ projectRoot: './fixtures/wasm-panic-error' });
});

describe('Vue component', () => {
  it('throws helpful error', async () => {
    try {
      await fixture.build();

      // should err
      expect(true).to.be.false;
    } catch (err) {
      let message = err.toString();

      // test err thrown contains filepath
      expect(message).to.include('wasm-panic-error/src/pages/index.astro');

      // test err thrown contains "Syntax error"
      expect(message).to.include('Syntax error');
    }
  });
});
