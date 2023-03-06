import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();
app.use(morgan("dev")); //for logging
app.use(express.json()); //allow client to send json
app.use(express.urlencoded({ extended: true })); //allow client to put a query string

//crate a middleware

app.use((req, res, next) => {
	next();
});

app.get("/", (req, res) => {
	console.log("hello from express");
	res.status(200);
	res.json({ message: "hello" });
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);
app.use((err, req, res, next) => {
	if (err.type === "auth") {
		res.status(401).json({ message: "unauthorized" });
	} else if (err.type === "input") {
		res.status(400).json({ message: "invalid input" });
	} else {
		res.status(500).json({ message: "opps internal server error" });
	}
});

export default app;
