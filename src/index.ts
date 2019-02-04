
import express from 'express';

const port = 8080;
const app = express();

app.get('/api/users', ( req, res ) => {
   const data: string[] = ['user1', 'user2', 'user3'];
   res.json(data);
});

app.listen(port, () => {
   console.log(`server started at http://localhost:${port}`);
});

