const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./routes/users');

app.use(cors({ origin: '*' }));

app.use('/api/users', users);

app.get('/api', (req, res) => {
	res.send('hello');
});

app.listen(5000, () => {
	console.log('server started');
});
