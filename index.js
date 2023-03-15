require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware")

const app = express()

const { createUser, getUser } = require("./controller/user")
const JwtToken = require("./middleware/Jwt")

var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

var corsOptions2 = {
  origin: 'http://localhost:3001',
}

app.use(express.json())
app.use(cors(corsOptions2))
app.use(cookieParser())


app.post("/user", createUser)

// app.use(JwtToken.verifyJwt)

// app.use("aosdqw", JwtToken.verifyJwt, guardedrouter)
// app.use("aosdqw", unguardedrouter)


app.get("/user/getall", getUser, () => { })
app.get("/user/:userId", getUser)

app.get("/", (req, res, next) => {
  console.log("inside / route")
  next()
  res.send("Hello world!!!")
}, () => {
  console.log(" ============= next called ============= ");
})

app.use(errorHandlerMiddleware)
app.use("*", (req, res) => {
  // not found
  res.status(404).json()
})

const PORT = process.env.PORT || 5000

try {
  app.listen(PORT, () => console.log(`server started at port ${PORT}`))
} catch (err) {
  console.error(err)
}