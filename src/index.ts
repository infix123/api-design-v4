import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";
import config from "./config";

app.listen(config.port, () => {
	console.log(`hello from http://localhost:${config.port}`);
});

/*import http from "http";

const server = http.createServer(async (req, res) => {
	if (req.method === "GET" && req.url === "/") {
		res.end();
	}
});

server.listen(3000, () => {
	console.log("server on http://localhost:3000");
});*/
