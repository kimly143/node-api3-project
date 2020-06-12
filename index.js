const express = require('express');
const morgan = require('morgan');

const path = require('path');

const server = express();

server.get('/download', (req, res, next) => {
	const filePath = path.join(__dirname, 'index.html');
	res.sendFile(filePath, (err) => {
		if (err) {
			next(err);
		} else {
			console.log('File sent successfully');
		}
	});
});

server.use((err, req, res, next) => {
	console.error(err);

	res.status(500).json({ message: 'There was an error performing the required operation' });
});
server.listen(4040);
