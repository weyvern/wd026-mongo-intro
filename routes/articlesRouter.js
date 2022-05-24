import { Router } from 'express';
import { createArticle, getAllArticles, getSingleArticle } from '../controllers/articles.js';

const articlesRouter = Router();

articlesRouter.route('/').get(getAllArticles).post(createArticle);
articlesRouter.route('/:id').get(getSingleArticle);

export default articlesRouter;
