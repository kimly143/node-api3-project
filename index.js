const express = require('express');
const morgan = require('morgan');

const userRouter = require('./users/userRouter');
const userDb = require('./users/userDb');

const server = express();
const port = 4040;

server.use(express.json());
server.use(morgan('combined'));

server.use(userRouter);
server.use(userDb);

// server.get('/download', (req, res, next) => {
// 	const filePath = path.join(__dirname, 'index.html');
// 	res.sendFile(filePath, (err) => {
// 		if (err) {
// 			next(err);
// 		} else {
// 			console.log('File sent successfully');
// 		}
// 	});
// });

// server.use((err, req, res, next) => {
// 	console.error(err);

// 	res.status(500).json({ message: 'There was an error performing the required operation' });
// });
server.listen(port, () => {
	console.log('server ruuning at http://localhost:${port}');
});
