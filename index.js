import express, { json } from 'express';
import usersRoutes from './routers/users.js';
import authRoutes from './routers/auth.js';
const app = express();

app.set('view-engine', 'ejs');
app.use(express.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
  res.send('Hello World!s!!')
})

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Port : ${port}`))