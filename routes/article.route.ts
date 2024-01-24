import { Router } from 'express';
import { getRecentArticles } from '../controllers/article.controller';

const articleRoute = () => {
  const router = Router();

  router.get('/recent', getRecentArticles);
  
  return router;
};

export { articleRoute }