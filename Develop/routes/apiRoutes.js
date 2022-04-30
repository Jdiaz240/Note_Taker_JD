//TODO Require the roouter and db items needed
const path = require('path');
const router = require('express').router();
const api = require('');
//TODO Set up a get/post/delete methods as responses to the database
// api.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes"));
// });

// api.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// api.get('/', (req, res) => {
//     readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
//   });
  
  // POST Route for a new UX/UI tip
  tips.post('/', (req, res) => {
    console.log(req.body);
  
    const { noteTitle, note } = req.body;
  
    if (req.body) {
      const newNote = {
        note,
        noteTitle,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, '../../db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });






//Export the routes
module.exports = router;