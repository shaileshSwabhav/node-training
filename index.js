require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware")

const app = express()

const { guardedRouter, unguardedRouter } = require("./components")
const notFoundMiddleware = require("./middleware/notFound")

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

app.use("/api/v1", guardedRouter, unguardedRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const PORT = process.env.PORT || 5000

try {
  app.listen(PORT, () => console.log(`server started at port ${PORT}`))
} catch (err) {
  console.error(err)
}