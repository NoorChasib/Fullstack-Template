const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

const delayConnect = (delay = 5000) => {
	// Delay in milliseconds
	setTimeout(() => {
		client
			.connect()
			.then(() => console.log("Connected to the database."))
			.catch((err) => console.error("Failed to connect to the database:", err));
	}, delay);
};

delayConnect();

module.exports = client;
