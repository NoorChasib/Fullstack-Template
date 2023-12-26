const express = require("express");
const cors = require("cors");
const client = require("./database/connectDatabase");

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send("Hello World!");
});

// route to check database connection and fetch testuser
app.get("/api/db-check", async (req, res) => {
	try {
		const dbResponse = await client.query(
			"SELECT * FROM users WHERE username = 'testuser'"
		);
		if (dbResponse.rows.length > 0) {
			res.json({
				message: "Database connection successful",
				user: dbResponse.rows[0],
			});
		} else {
			res.status(404).json({
				message: "Test user not found",
			});
		}
	} catch (error) {
		console.error("Database query failed:", error);
		res.status(500).json({
			message: "Database query failed",
			error: error.message,
		});
	}
});

app.listen(port, "::", () => console.log(`Server listening on [::]${port}`));
