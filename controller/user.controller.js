const { userService } = require('../service');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const user = await userService.findAll();

      res.json(user);
    } catch (e) {
      next(e);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { body } = req;

      await userService.createUser(body);

      res.json('OK');
    } catch (e) {
      next(e);
    }
  }
};
