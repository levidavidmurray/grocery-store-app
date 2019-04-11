import express from 'express';
import cors from 'cors';

import GroceryItems from './DBConnector';

const app = express();
app.use(cors());

const groceryCategories = [
  'bakery', 
  'dairy', 
  'deli', 
  'meat_and_seafood', 
  'pasta_sauces_grains', 
  'produce'
];

groceryCategories.forEach(category => {
  let groceryItems = GroceryItems(category).findAll().then(items => {
    return items;
  });

  app.get(`/${category}`, (req, res) => {
    GroceryItems(category).findAll({ limit: 5 }).then(items => {
      res.send(items);
    });
  });
});

app.listen(4070, () => {
  console.log('Listening on port 3000');
});
