const { hello, goodbye } = require('./actions');

const main = async () => {
  await hello();
  goodbye()
};

main().then(console.log('Hello World!'));
