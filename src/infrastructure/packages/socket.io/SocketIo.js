const { Server } = require("socket.io");
const DeliveryTrackingController = require("../../../adapters/controllers/deliveryTracking/DeliveryTrackingController");

class SocketIo {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    this.eventHandlers = new Map();
    this.deliveryTrackingController = new DeliveryTrackingController();
  }

  registerEventHandler = () => {
    this.eventHandlers.set(
      "updateDeliveryLocation",
      this.deliveryTrackingController.updateLocation
    );
  };

  init = () => {
    this.registerEventHandler();

    this.io.on("connection", (socket) => {
      console.log("user connected");

      this.eventHandlers.forEach((handler, eventName) => {
        socket.on(eventName, (data) => {
          handler(socket, data);
        });
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  };
}

module.exports = SocketIo;
