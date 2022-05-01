//TODO Require the path and require items needed
const path = require('path')
const router = require('express').Router();

//TODO Need to add the router.get functionality for each of the html pages
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Export the routes
module.exports = router;