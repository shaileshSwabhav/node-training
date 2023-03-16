const { User } = require("../../../views/user")
const { createUser: createUserService, getUser: getUserService } = require("../service/user")
const JwtToken = require("../../../middleware/Jwt")
const { StatusCodes } = require('http-status-codes')


const createUser = (req, res, next) => {
  try {
    console.log("inside /user route", req.body)

    const { firstName, lastName, email, password } = req.body
    const user = new User(firstName, lastName, email, password)

    createUserService(user)

    const jwt = new JwtToken(firstName, lastName, email)
    const token = jwt.generateToken()

    res.cookie("authorization", token)
    res.status(StatusCodes.CREATED).send(null)
  } catch (error) {
    console.error(error);
    next(error)
  }
}

async function getUser(req, res) {
  try {
    console.log(req.params);
    const users = await getUserService()
    res.status(StatusCodes.OK).json(users)
  } catch (error) {
    console.log("error in controller");
    console.error(error);
    next(error)
  }
}

module.exports = { createUser, getUser }