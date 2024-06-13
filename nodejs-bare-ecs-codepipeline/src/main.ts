import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Instance is healty!');
});

app.listen(3000, () => {
  console.log('App started');
});
