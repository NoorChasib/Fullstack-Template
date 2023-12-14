const express = require("express");
const cors = require("cors");
const pool = require("./connect-database");
const app = express();

const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
	res.status(200).send("Hello World!");
});

// New route to check database connection
app.get("/api/db-check", async (req, res) => {
	try {
		const dbResponse = await pool.query("SELECT NOW()");
		res.json({
			message: "Database connection successful",
			time: dbResponse.rows[0].now,
		});
	} catch (error) {
		console.error("Database connection failed:", error);
		res
			.status(500)
			.json({ message: "Database connection failed", error: error.message });
	}
});

app.listen(port, () => console.log("Server running on port " + port));
