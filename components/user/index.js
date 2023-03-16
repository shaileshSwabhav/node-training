const express = require("express")
const { createUser, getUser } = require("./controller/user")
const JwtToken = require("../../middleware/Jwt")

const guardedUserRouter = express.Router()
const unguardedUserRouter = express.Router()

unguardedUserRouter.post("/user", createUser)
guardedUserRouter.get("/user", JwtToken.verifyJwt, getUser)

module.exports = { guardedUserRouter, unguardedUserRouter }