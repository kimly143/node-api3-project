const express = require('express');

const router = express.Router();

const db = require('./userDb');

router.post('/', (req, res) => {
	// do your magic!
});

router.post('/:id/posts', (req, res) => {
	// do your magic!
});

router.get('/', (req, res) => {
	res.end();
});

//passing middle ware to this handle only

// router.get('/:id', validateUserId, (req, res) => {
// 	res.json(req.user);
// });

router.get('/:id', validateUserId, validateUser, (req, res) => {
	res.json(req.user);
});

router.get('/:id/posts', (req, res) => {
	// do your magic!
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

router.put('/:id', (req, res) => {
	// do your magic!
});

//custom middleware

//validateUserId middleware
async function validateUserId(req, res, next) {
	try {
		const [ user ] = await db.getById(req.params.id);
		if (!user) {
			return res.status(400).json({
				message: 'invalid user id'
			});
		}
		req.user = user;
	} catch (e) {
		return res.status(500).json({
			error: 'The user information could not be retrieved.'
		});
	}
	next();
}

//validateUser middleware
async function validateUser(req, res, next) {
	try {
		if (!req.body) {
			return res.status(400).json({
				message: 'missing user data'
			});
		} else if (!req.body.name) {
			return res.status(400).json({
				message: 'missing required name field'
			});
		}
		req.user = user;
	} catch (e) {
		return res.status(500).json({
			error: 'error when validation user'
		});
	}
	next();
}

//validatePost middleware
function validatePost(req, res, next) {
	// do your magic!
}

module.exports = router;
