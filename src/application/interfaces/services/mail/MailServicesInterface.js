/**
 * @interface
 */
class MailServicesInterface {
  /**
   * Creates a verification email template
   * @param {string} token - The token to use in the verification link
   * @returns {string} - The verification email template
   */
  createVerificationEmailTemplate = (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Sends a verification email
   * @param {string} email - The email to send the verification email to
   * @param {string} token - The token to use in the verification link
   * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating whether the email was sent or not
   */
  sendVerificationEmail = async (email, token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Creates a reset password email template
   * @param {string} token - The token to use in the reset password link
   * @returns {string} - The reset password email template
   */
  createResetPasswordEmailTemplate = (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Sends a reset password email
   * @param {string} email - The email to send the reset password email to
   * @param {string} token - The token to use in the reset password link
   * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating whether the email was sent or not
   */
  sendResetPasswordEmail = async (email, token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = MailServicesInterface;
