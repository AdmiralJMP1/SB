import initializeRouter from '../routes';

function initializePug(app) {
  app.set('view engine', 'pug');
  app.set('views', './views');
}

function initializeStatic(app, express) {
  app.use(express.static('static'));
  app.use('/static', express.static('static'));
}

function middleware(app, express) {
  initializePug(app);
  initializeRouter(app);
  initializeStatic(app, express);
}

export default middleware;
