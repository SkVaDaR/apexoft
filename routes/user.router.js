const router = require('express').Router();

const { userController } = require('../controller');

router.get('/', userController.getAll);
router.post('/api/v1/auth/sign-up', userController.createUser);

module.exports = router;
