const { Server } = require("socket.io");

class SocketIo {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
  }

  init = () => {
    this.io.on("connection", (socket) => {
      console.log("user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  };
}

module.exports = SocketIo;
