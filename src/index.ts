import express, { Request, Response } from 'express';

const app = express();

const posts = [
  {
    username: 'Mark',
    title: 'Post 1',
  },
  {
    username: 'Mark',
    title: 'Post 1',
  },
];

app.get('/posts', (req: Request, res: Response) => {
  res.json(posts);
});

const port = 3000;
app.listen(port, () =>
  console.log(`JWT Authentication App listening on port ${port}`)
);
