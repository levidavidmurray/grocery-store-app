import express from 'express';
import GroceryItems from './DBConnector';

const app = express();

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
    res.send(groceryItems);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
