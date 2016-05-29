import express from 'express';
import path from 'path';


export default function() {
  const app = express();
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.get('*', (req, res) => {
    res.render('index', {
      html: ''
    });
  });
  return app;
}