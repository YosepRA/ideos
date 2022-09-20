const User = require('../database/models/user.js');

const { promiseResolver } = require('../utilities/helpers.js');

module.exports = {
  async signup(req, res) {
    const { user } = req.body;
    const { password, ...userRest } = user;

    const [registeredUser, error] = await promiseResolver(
      User.register(userRest, password),
    );

    if (error) {
      return res.json({
        status: 'error',
        message: 'Sign up failed.',
      });
    }

    // Establish login session.

    return res.json({
      status: 'ok',
      username: registeredUser.username,
    });
  },
};
