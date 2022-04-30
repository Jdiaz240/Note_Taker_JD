//TODO Require the roouter and db items needed
const path = require('path');
const router = require('express').router();
//TODO Set up a get/post/delete methods as responses to the database
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes"));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//TODO Export the router

//TODO Require the path and require items needed


//TODO Need to add the router.get functionality for each of the html pages


//Export the routes
module.exports = router;