const path = require('path');

const router = require('express').Router();



//Sends notes to the notes.html file
router.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})


router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;

