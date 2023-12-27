const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

const delayConnect = () => {
	setTimeout(() => {
		client
			.connect()
			.then(() => console.log("Connected to the database."))
			.catch((err) => console.error("Failed to connect to the database:", err));
	}, 5000);
};

delayConnect();

module.exports = client;
