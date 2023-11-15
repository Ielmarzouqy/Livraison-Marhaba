const EmailGatewayInterface = require("../../../application/interfaces/gateways/mail/EmailGatewayInterface");

class EmailGateway extends EmailGatewayInterface {
  constructor() {
    super();
  }

  async sendEmail(to, subject, body) {}
}

module.exports = EmailGateway;
