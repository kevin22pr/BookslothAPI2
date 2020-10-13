const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const bodyParser = require("body-parser")

const userRoutes = require("./routes/User")
const messageRoutes = require("./routes/Message")

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true })) // x-www-form-urlencoded

app.use("/user", userRoutes)
app.use("/messages", messageRoutes)

app.listen(8000, () => {
    console.log("server has started on port 8000")
})