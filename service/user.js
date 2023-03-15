const { User, users } = require("../views/user")
const { BadRequestError } = require("../errors")

const createUser = (user) => {
  try {
    isEmailUnique(user)
    user.createUser()
  } catch (error) {
    console.error(error);
  }
}

const isEmailUnique = (user) => {
  for (let index = 0; index < users.length; index++) {
    if (users[index].email == user.email) {
      throw new BadRequestError("Email is not unique")
    }
  }
}


const getUser = (req, res) => {
  return User.getUsers()
}


module.exports = {
  createUser, getUser
}