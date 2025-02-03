const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error'); // Send an error response
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});