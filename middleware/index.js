import initRouter from '../routes';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import setStrategy from './strategy';

//For BodyParser
function initBodyParser(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}

// For Passport
function initPassport(app) {
  app.use(session({
    secret: process.env.PASSPORT_SECRET,
    resave: true,
    saveUninitialized:true
  })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
}

function initPug(app) {
  app.set('view engine', 'pug');
  app.set('views', './views');
}

function initStatic(app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

function middleware(app, express) {
  setStrategy(passport);
  initBodyParser(app);
  initPassport(app);
  initPug(app);
  initRouter(app);
  initStatic(app, express);
}

export default middleware;
