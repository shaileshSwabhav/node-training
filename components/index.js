const express = require("express")
const { guardedUserRouter, unguardedUserRouter } = require("./user")

const guardedRouter = express.Router()
const unguardedRouter = express.Router()

guardedRouter.use("/", guardedUserRouter)
unguardedRouter.use("/", unguardedUserRouter)

module.exports = { guardedRouter, unguardedRouter }