const express = require('express')
const app = express();
const people = require('./routes/people')



app.use(express.static('public'))
app.use('/api/people', people)



app.listen(3000, () => {
    console.log(`server is listening at :3000`)
})