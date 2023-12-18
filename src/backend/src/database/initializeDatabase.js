const fs = require("fs");
const path = require("path");
const client = require("./connectDatabase");

async function initializeDatabase() {
	try {
		const sqlFilePath = path.join(__dirname, "../../schema/schema.sql");
		const sql = fs.readFileSync(sqlFilePath, "utf-8");
		await client.query(sql);
		console.log("Database initialization successful");
	} catch (error) {
		console.error("Error initializing database:", error);
		throw error; 
	}
}

module.exports = initializeDatabase;
