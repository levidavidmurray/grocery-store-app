import express from 'express';
import cors from 'cors';

import GroceryItems from './DBConnector';

const app = express();
app.use(cors());

const categoryPathMap = {
  bakery: 'bakery',
  dairy: 'dairy',
  deli: 'deli',
  meat: 'meat_and_seafood',
  pasta: 'pasta_sauces_grains',
  produce: 'produce'
};

Object.entries(categoryPathMap).forEach(categoryPath => {
  app.get(`/${categoryPath[0]}`, (req, res) => {
    GroceryItems(categoryPath[1]).findAll({ limit: 5 }).then(items => {
      res.send(items);
    });
  });
});

app.listen(4070, () => {
  console.log('Listening on port 3000');
});
