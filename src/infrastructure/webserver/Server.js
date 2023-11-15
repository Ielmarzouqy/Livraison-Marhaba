const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

class Server {
  constructor(PORT, routes) {
    this.app = express();
    this.PORT = PORT;
    this.routes = routes;
  }

  configure = () => {
    this.app.use(cookieParser());
    this.app.use(express.json());

    this.app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );

    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    this.routes.forEach((route) => {
      this.app.use(`/api${route.path}`, route.router);
    });
  };

  start = () => {
    this.configure();

    this.app.listen(this.PORT, () => {
      console.log(`-----------------------------------------------`);
      console.log(`| 🚀 Server running on http://localhost:${this.PORT}/ |`);
      console.log(`-----------------------------------------------`);
    });
  };
}

module.exports = Server;
