const actions = require('../actions');

describe('testing actions', () => {
  it('finds the meaning of life', async () => {
    expect(await actions.hello()).toEqual(42);
  });
  it('says goodbye', async () => {
    expect(actions.goodbye()).toEqual('Goodbye Cruel World!');
  });
});
