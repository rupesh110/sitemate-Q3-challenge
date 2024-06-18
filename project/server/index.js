import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import IssuesRoutes from './routes/IssuesRoutes.js';

const app = express();
const port = 5000;


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/api', IssuesRoutes);


app.use('*', (req, res) => {
    res.status(404).json({ message: '404 Not Found' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
