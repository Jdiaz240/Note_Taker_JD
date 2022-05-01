//TODO Require the roouter and db items needed
const router = require('express').Router();
const { addNotes } = require('../db/store');
const store = require('../db/store');

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const uuidv1 = require('../helpers/uuid');

router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


router.post('/notes', (req,res) => {
  console.log('hello');

  const {title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv1(),
    };
  
   readAndAppend(newNote);
   res.json('Note added successfully');
  } else {
    res.error('Error in adding note');
  }

  });


//Export the routes
module.exports = router;