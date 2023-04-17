const express = require('express');
const app = express();

app.get('/api/timestamp/:start/:end', (req, res) => {
  const [start, end] = req.params.map((param) =>
    Date.parse(param.replace(/:/g, ' '))
  );
  if (isNaN(start) || isNaN(end)) {
    return res.status(400).send('Invalid date format');
  }
  const diffInSeconds = (end - start) / 1000;
  res.send({ difference: diffInSeconds });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});