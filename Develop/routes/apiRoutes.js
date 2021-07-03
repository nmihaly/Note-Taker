const router = require('express').Router();
const { db } = require('../../Develop/db/db.json');
const fs = require('fs');
const util = require('util');

function createNewNote(body, notesArray) {
  const newNote = body;
  if (!Array.isArray(notesArray))
      notesArray = [];
  
  if (notesArray.length === 0)
      notesArray.push(0);

  body.id = notesArray[0];
  notesArray[0]++;

  notesArray.push(newNote);
  fs.writeFileSync(
      path.join(__dirname, db),
      JSON.stringify(notesArray, null, 2)
  );
  return newNote;
}

router.get('/api/notes'), (req, res) => {
  let data = json.parse(fs.readFileSync(db, 'utf-8'));
  console.log(json.stringify(data));
  res.json(data);
  }

 
router.post('/api/notes', (req, res) => {
  const newNote = createNewNote(req.body, db);
    res.json(newNote);
});


module.exports = router;