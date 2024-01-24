import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { articleRoute } from './routes/article.route';

const app: Application = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const axios = require('axios');

const PORT = process.env['PORT'] || 3000;
const URI = process.env['MONGO_URI'] || 'mongodb://localhost:27017/news-app';
const API_KEY = process.env['API_KEY'];

app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use('/article', articleRoute());

async function connect(){
    try {
        await mongoose.connect(URI);
        console.log("connected to MongoDB");
    }
    catch(error) {
        console.log(error);
    }
}

connect();

const httpServer = app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});

export { API_KEY, axios }
