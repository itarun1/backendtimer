const express = require('express');
const moment = require('moment');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/timestamp-difference', (req, res) => {
    const { timestamp1, timestamp2 } = req.body;
    const moment1 = moment(timestamp1, 'DD:MM:YYYY HH:mm:ss', true);
    const moment2 = moment(timestamp2, 'DD:MM:YYYY HH:mm:ss', true);
    if (!moment1.isValid() || !moment2.isValid()) {
      return res.status(400).json({ error: 'Invalid timestamp format' });
    }
    const duration = moment.duration(moment2.diff(moment1));
    const difference = `${duration.days() +" days"} ${duration.hours()+" hours"} ${duration.minutes()+" minutes"} ${duration.seconds()}`;
    res.json({ result: difference });
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
