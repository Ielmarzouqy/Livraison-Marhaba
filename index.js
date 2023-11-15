const Server = require("./src/infrastructure/webserver/Server");
const { PORT } = require("./src/infrastructure/config/environment");

const server = new Server(PORT, []);

server.start();
