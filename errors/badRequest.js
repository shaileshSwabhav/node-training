const BaseError = require("./BaseError");

class BadRequestError extends BaseError {
  constructor(errorMessage) {
    super(errorMessage, 400)
  }
}

class UnauthoirzedError extends BaseError {
  constructor(errorMessage) {
    super(errorMessage, 401)
  }
}

module.exports = { BadRequestError, UnauthoirzedError }