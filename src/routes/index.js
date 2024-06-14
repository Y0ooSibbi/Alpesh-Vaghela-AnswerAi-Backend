const express = require('express');
const authController = require('../controllers/authController');
const questionController = require('../controllers/questionController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);
router.post('/auth/refresh', authController.refresh);

router.post('/questions', auth, questionController.askQuestion);
router.get('/questions/:questionId', auth, questionController.getQuestion);
router.get('/users/:userId/questions', auth, questionController.getUserQuestions);

module.exports = router;
