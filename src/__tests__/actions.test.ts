import { goodbye, hello } from '../actions';

describe('testing actions', () => {
  it('finds the meaning of life', async () => {
    expect(await hello()).toEqual(42);
  });
  it('says goodbye', async () => {
    expect(goodbye()).toEqual('Goodbye Cruel World!');
  });
});
