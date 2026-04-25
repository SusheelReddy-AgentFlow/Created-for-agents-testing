import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  // This is a mock authentication. Replace with actual authentication logic.
  if (username === 'user' && password === 'password') {
    res.status(200).json({ message: 'Login successful', token: 'mock-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Mock backend listening at http://localhost:${port}`);
});
