require('dotenv').config({path: './db.env.local'});
const Sequelize = require("sequelize");

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const connector = {host: process.env.DB_HOST, dialect: "mariadb"};

const sequelize = new Sequelize(database, username, password, connector);

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connection established");
	})
	.catch(err => {
		console.log("Unable to connect to the database");
		console.error(err)
	});

const GroceryItems = (tableName) => {
	return sequelize.define(tableName, {
		sku: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		brand: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		},
		category: {
			type: Sequelize.STRING
		},
		currentPrice: {
			type: Sequelize.STRING
		}
	}, {
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});
}

export default GroceryItems;
