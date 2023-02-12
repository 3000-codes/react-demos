import express from 'express';
import * as bodyParser from 'body-parser';
import { readFileSync,writeFileSync } from 'fs';
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(bodyParser.json());

app.get('/api/todo', async(req, res) => {
  // res.send('Hello World!');
  const data = readFileSync('data.json', 'utf8');
  res.send(data);
});

app.post('/api/todo/new', async(req, res) => {
  const data = readFileSync('data.json', 'utf8');
  const todos = JSON.parse(data);
  todos.push(req.body);
  writeFileSync('data.json', JSON.stringify(todos));
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});