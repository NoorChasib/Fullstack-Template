const express = require("express");
const cors = require("cors");
const pool = require("./database/connectDatabase");
const initializeDatabase = require("./database/initializeDatabase");

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());

initializeDatabase()
	.then(() => {
		app.get("/", (req, res, next) => {
			res.status(200).send("Hello World!");
		});

		// route to check database connection and fetch testuser
		app.get("/api/db-check", async (req, res) => {
			try {
				const dbResponse = await pool.query(
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

		const server = app.listen(port, () =>
			console.log("Server running on port " + port)
		);

		// Handle server shutdown gracefully
		process.on("SIGTERM", () => {
			console.log("SIGTERM signal received: closing HTTP server");
			server.close(async () => {
				console.log("HTTP server closed");
				await pool.end();
				console.log("Database pool closed");
			});
		});
	})
	.catch((err) => {
		console.error("Database initialization failed:", err);
	});
