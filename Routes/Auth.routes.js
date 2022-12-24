const express = require('express')
const router = express.Router();

const signUpController = require('../controller/signUpController')
const logInController = require('../controller/logInController')

router.post('/login', logInController.logInHandler )
router.post('/signUp', signUpController.signUpHandler)

module.exports = router;