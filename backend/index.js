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
	/**
	 * URL Params
	 * e.g `/bakery?offset=0&limit=20`
	 */
	app.get(`/${categoryPath[0]}`, (req, res) => {
		const groceryItems = [];
		let offset = parseInt(req.query.offset) || 0;
		let limit = parseInt(req.query.limit) || 20;

		GroceryItems(categoryPath[1]).findAll({offset: offset}).then(items => {
			for (let i = 0; i < items.length; i++) {
				// I don't want to deal with non single item prices right now e.g "$4.99 for 3"
				const price = items[i].dataValues.currentPrice;
				const priceNum = parseFloat(price.substring(1, price.length));

				if (!isNaN(priceNum)) {
					groceryItems.push(items[i]);
				}

				if (groceryItems.length >= limit) break;
			}

			res.send(groceryItems);
		});
	});

	app.get(`/${categoryPath[0]}/count`, (req, res) => {
		GroceryItems(categoryPath[1]).count().then(count => {
			res.send({ count, category: categoryPath[1] });
		})
	})
});

app.listen(4070, () => {
	console.log('Listening on port 3000');
});
