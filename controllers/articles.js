export const getAllArticles = async (req, res) => {
  try {
    res.json([]);
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

    res.status(201).json({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleArticle = async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
