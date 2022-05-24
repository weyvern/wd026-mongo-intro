import express from 'express';
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/articles', articlesRouter);
app.get('*', (req, res) => res.sendStatus(404));

app.listen(port, () => console.log(`Server running on port ${port}`));
