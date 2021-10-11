// routes/people

const express = require('express')
const router = express.Router();
const {
    getPeople,
    getPerson,
} = require('../controllers/people')


router.get('/', getPeople);
router.get('/:name', getPerson);




module.exports = router;