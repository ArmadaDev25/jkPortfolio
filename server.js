// Import Dependencies
const express = require("express")
const cors = require("cors")

// JSON file imports
const projects_SE = require("./datafiles/projects_SE.json")

// PORT number declaration
const PORT = process.env.PORT || 4000

// App object
const app = express()

// Set up Middleware
app.use(cors())

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// Home route
app.get("/", (req, res) => {
    res.send("Nothing to See Here")
})