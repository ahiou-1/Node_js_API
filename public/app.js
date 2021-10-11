const header = document.querySelector('.header')

const getApi = async () => {
    const people = await axios.get('/api/people')
    const person = people.data.data.map(person => {
        return person.name
    })
    header.innerHTML = `<h1>${person.join(' ')}</h1>`
    console.log(people.data.data, person)
}
getApi();

