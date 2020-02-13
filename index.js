const { hello, goodbye } = require('./actions');

require('dotenv').config({
  path: 'config.env',
});

const main = async () => {
  await hello();
  goodbye();
};

main().then(
  console.log(`Hello World! Our App is called ${process.env.APP_NAME}`)
);
