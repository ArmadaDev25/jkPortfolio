// Import Dependencies
const express = require("express")
const cors = require("cors")

// JSON file imports
const projects_SE = require("./datafiles/projects_SE.json")
const qaGameCreds_sm = require("./datafiles/gamecreds_sm_qa.json")

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

// Game credits condensed List
app.get("/gcqac", (req, res) => {
    res.json(qaGameCreds_sm)
})