import dotenv from 'dotenv';

dotenv.config({
  path: 'config.env',
});

describe('testing environment', () => {
  it('checks for the correct application name', async () => {
    expect(process.env.APP_NAME).toEqual('node-template');
  });
});
