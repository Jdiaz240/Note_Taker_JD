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
//reads and gets files from the data base file
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//sets up the new note
router.post('/notes', (req,res) => {
  console.log('hello');

  const {title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv1(),//gives the new note an id 
    };
  //appends the new notes to the page so that they can be seen when saved
   readAndAppend(newNote);
   res.json('Note added successfully');
  } else {
    //error message in case there is a problem saving the note
    res.error('Error in adding note');
  }

  });


//Export the routes
module.exports = router;