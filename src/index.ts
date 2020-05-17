import dotenv from 'dotenv';
import { hello, goodbye } from './actions';

dotenv.config({
  path: 'config.env',
});

console.log('hello');

async function main(): Promise<void> {
  await hello();
  goodbye();
}

main().then(() => {
  console.log(`Hello World! Our App is called ${process.env.APP_NAME}`);
});
