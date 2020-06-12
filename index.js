const express = require('express');
// const morgan = require('morgan');

const userRouter = require('./users/userRouter');
const userDb = require('./users/userDb');

const server = express();
const port = 4040;

server.use(express.json());
// server.use(morgan('combined'));

//logger
server.use((req, res, next) => {
	console.log(`${req.method} ${req.path} at ${new Date().toLocaleString()}`);
	next();
});

server.use('/api/users', userRouter);

server.listen(port, () => {
	console.log(`server runing at http://localhost:${port}`);
});

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`);
});
