import { axios } from '../index';
import { article } from "../models/article.model";
import {Request, Response} from 'express';

const API_KEY = '8a3c33e54f064569906cce03aad22dc1';

const getRecentArticles =  (req: Request, res: Response) => {
      const keywords = req.query['keywords'];
      const pageSize = req.query['pageSize'];
      const page = req.query['page'];
      
      axios.get('https://newsapi.org/v2/top-headlines',
      {
        params: {
          country : 'us',
          pageSize: pageSize,
          page: page,
          q: keywords,
          apiKey : API_KEY }
      }).then((response: { data: any; }) => {
        saveArticles(response.data['articles']);
        return res.json(response.data);
      }).catch((error: any) => {
        console.error('Error fetching data:', error);
        return res.status(500).json({ error: 'Failed to fetch data' });
      });
    };

  const saveArticles = (data: any) => {
    article.insertMany(data)
    .then(()=> {
      console.log("Saved the data");
    })
    .catch((error : any) => {
      console.log("Failed to save the data");
    });
  };


export { getRecentArticles }

  