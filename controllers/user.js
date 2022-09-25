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
        message: error.message,
      });
    }

    // Establish login session.
    req.login(registeredUser, (loginError) => {
      if (loginError) {
        const errorMessage = `Server login error: ${loginError.message}`;

        console.error(errorMessage);

        return res.status(500).send(errorMessage);
      }

      const { username } = registeredUser;
      const userData = {
        username,
      };

      return res.json({
        status: 'ok',
        user: userData,
      });
    });

    return undefined;
  },
  async signin(req, res) {
    const { username } = req.user;
    const userData = {
      username,
    };

    res.json({ status: 'ok', user: userData });
  },
  signout(req, res) {
    req.logout(() => {
      res.json({ status: 'ok' });
    });
  },
  protected(req, res) {
    res.send('You have accessed the protected route.');
  },
};
