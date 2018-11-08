import main from './main';

function router(app) {
  app.get('/', main);
}

export default router;
