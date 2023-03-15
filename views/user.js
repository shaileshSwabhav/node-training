
const users = []

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

  createUser() {
    console.log(this)
    if (!this.id) {
      this.id = users.length + 1
    }
    users.push({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    })
  }

  static getUsers() {
    return users
  }

}

module.exports = { User, users }