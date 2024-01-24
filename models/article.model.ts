import mongoose, { Schema, Model, Document } from 'mongoose';

type articleDocument = Document & {
    source : {
        id : number;
        name : string
    };
    author : string;
    title: string;
    description: string;
    url : string;
    urlImage: string;
    publishedAt : Date;
    content : string
};

  const articlesSchema = new Schema(
    {
    source: { type: Object },
    author: { type: String,},
    title: { type: String },
    description: { type: String },
    url: { type: String },
    urlImage: { type: String },
    publishedAt: { type: Date },
    content: { type: String }
    },
    {
      collection: 'articles',
      timestamps: true,
    }
);


const article: Model<articleDocument> = mongoose.model<articleDocument>('article', articlesSchema);
  
export { article, articleDocument };
