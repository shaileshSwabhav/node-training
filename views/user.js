
const users = []

const db = require("../models")

class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  setUserID(id) {
    this.id = id
  }

  async createUser(transaction) {
    console.log(this)
    if (!this.id) {
      this.id = users.length + 1
    }
    // users.push({
    //   id: this.id,
    //   firstName: this.firstName,
    //   lastName: this.lastName,
    //   email: this.email,
    //   password: this.password,
    // })

    // add to db
    const user = await db.User.create({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }, {
      transaction: transaction
    })

    console.log("users's auto-generated ID:", user.id);
  }

  static async getUsers() {
    const newUsers = await db.User.findAll()
    console.log(newUsers);
    return newUsers
  }

}

module.exports = { User, users }