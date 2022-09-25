const passport = require('passport');

module.exports = {
  isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(401).send('You are not authenticated.');
    }

    return next();
  },
  authenticateLogin(req, res, next) {
    passport.authenticate('local', (authError, user, info) => {
      if (authError) {
        const errorMessage = `Server authenticate error: ${authError.message}`;

        console.error(errorMessage);

        return res.status(500).send(errorMessage);
      }

      if (!user) {
        const { message } = info;

        return res.json({ status: 'error', message });
      }

      req.login(user, (loginError) => {
        if (loginError) {
          const errorMessage = `Server login error: ${loginError.message}`;

          console.error(errorMessage);

          return res.status(500).send(errorMessage);
        }

        return next();
      });

      return undefined;
    })(req, res, next);
  },
};
