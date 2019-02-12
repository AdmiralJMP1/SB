import passport from 'passport';
import main from './main';
import signinPage from './signin';
import signupPage from './signup';
import profilePage from './profile';
import orderPage from './orderPage';
import createOrderPage from './createOrder';


function router(app) {
  app.get('/', main);
  app.get('/signin', signinPage);
  app.get('/signup', signupPage);
  app.get('/profile', profilePage);
  app.get('/logout', function (req,res) {
    req.session.destroy(function(err) {
      res.redirect('/');
    });
  });
  app.get('/order/:id', orderPage);
  app.get('/create-order', createOrderPage);

  app.post('/signup', passport.authenticate('local-signup',  {
      successRedirect: '/dashboard',
      failureRedirect: '/signupError'
    }
  ));
  app.post('/signin', passport.authenticate('local-signin',  {
      successRedirect: '/dashboard',
      failureRedirect: '/signinError'
    }
  ));
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

export default router;
