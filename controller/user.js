const { User } = require("../views/user")
const { createUser: createUserService, getUser: getUserService } = require("../service/user")
const JwtToken = require("../middleware/Jwt")


const createUser = (req, res, next) => {
  try {
    console.log("inside /user route", req.body)

    const { firstName, lastName, email, password } = req.body

    const user = new User(firstName, lastName, email, password)
    // firstName -> should not have numbers

    createUserService(user)

    const jwt = new JwtToken(firstName, lastName, email)
    const token = jwt.generateToken()

    res.cookie("authorization", token)
    res.send("Hello world!!!")
  } catch (error) {
    console.error(error);
    next(error)
  }
}

// const getUser = (req, res) => {
//   const users = getUserService()
//   res.send(users)
// }

function getUser(req, res) {
  console.log(req.params);
  const users = getUserService()
  res.send(users)
}

module.exports = { createUser, getUser }