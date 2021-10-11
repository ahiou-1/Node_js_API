// controllers/people

const people = require('../data')

const getPeople = (req, res) => {
    res.json({ success: true, data: people })
}

const getPerson = (req, res) => {
    const { name } = req.params;
    const thePerson = people.find(person => {
        return person.name === name;
    })
    if(!thePerson) {
        return res.json({ success: false, data: null})
    }
    res.json({ success: true, data: thePerson })
}

module.exports = {
    getPeople,
    getPerson,
}