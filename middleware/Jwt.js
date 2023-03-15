const jwt = require("jsonwebtoken")
const { UnauthoirzedError } = require("../errors")

class JwtToken {
  constructor(firstName, lastName, username) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
  }

  generateToken() {
    const token = jwt.sign(JSON.stringify(this), process.env.JWT)

    return token
  }

  static async verifyJwt(req, res) {
    console.log("========= verifying jwt ========= ");
    const decode = req.cookies["authorization"]
    console.log("decode =>", decode);
    if (!decode) {
      console.log("token not found");
      throw new UnauthoirzedError("token not found")
    }
    const payload = jwt.verify(decode, process.env.JWT)
    console.log(payload);
    next()
  }
}


module.exports = JwtToken