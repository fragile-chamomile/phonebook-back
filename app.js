const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./src/config/passport");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const contactsRouter = require("./src/routes/api/contacts");
const usersRouter = require("./src/routes/api/users");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Phonebook API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "https://phonebook-base.herokuapp.com",
				description: "API base URL",
			},
		],
	},
	apis: ["./SwaggerDocs/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message: err.message });
});

module.exports = app;
