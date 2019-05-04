import DBEnv from './db.env';
import Sequelize from 'sequelize';

const connector = {host: DBEnv.DB_HOST, dialect: "mariadb"};
const sequelize = new Sequelize(DBEnv.DB_NAME, DBEnv.DB_USER, DBEnv.DB_PASS, connector);

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
