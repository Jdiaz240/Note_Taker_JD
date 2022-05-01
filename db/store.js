//Require the util and fs needed
//Util is a built in feature of node like fs
const util = require('util');
const fs = require('fs');

const uuidv1 = require('../helpers/uuid');

//writeToFile
const writeFile = util.promisify(fs.writeFile)
//readToFile
const readFile = util.promisify(fs.readFile)

//TODO Require the uuid/v1 package in your package json
class store {
    read() {
        return readFile ('utf8');
    }

    write(note) {
        return writeFile(JSON.stringify(note));
    }

    //get the notes
getNotes() {
    return this.read().then((notes) => {
        let parseNotes = [].concat(JSON.parse(notes));
        return parseNotes;
    })
}
    //add some notes
addNotes(note) {
    const {title, text} = note;
    const newNote = {title,text,id: uuidv1()};
    return this.getNotes()
    .then((notes) => [...notes, newNotes])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNotes);
}
    //delete notes
}

module.exports = new store();