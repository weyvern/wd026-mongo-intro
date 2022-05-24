import db, { ObjectId } from '../db/mongoClient.js';

const COLLECTION = 'articles';
const articlesCollection = db.collection(COLLECTION);

export const getAllArticles = async (req, res) => {
  try {
    const articles = await articlesCollection.find().toArray();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    const {
      body: { title, content, author }
    } = req;
    if (!title || !content || !author)
      return res.status(400).json({ error: 'Yep, you need to send title, content and author' });
    const { insertedId } = await articlesCollection.insertOne({ title, content, author });
    const newArticle = await articlesCollection.findOne({ _id: insertedId });
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleArticle = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const article = await articlesCollection.findOne({ _id: ObjectId(id) });
    if (!article) return res.status(404).json({ error: `Article with id of ${id} doesn't exist` });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
