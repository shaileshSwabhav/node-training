const { User, users } = require("../../../views/user")
const { BadRequestError } = require("../../../errors")
const db = require("../../../models")

const createUser = async (user) => {
  const transaction = await db.sequelize.transaction()

  try {
    isEmailUnique(user)
    user.createUser(transaction)
    await transaction.commit()
  } catch (error) {
    console.error(error);
    await transaction.rollback()
  }
}

const isEmailUnique = (user) => {
  for (let index = 0; index < users.length; index++) {
    if (users[index].email == user.email) {
      throw new BadRequestError("Email is not unique")
    }
  }
}

const getUser = async (req, res) => {
  return await User.getUsers()
}

module.exports = {
  createUser, getUser
}