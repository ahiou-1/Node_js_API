const form = document.querySelector('.form')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const box = document.querySelector('.answer-box')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    try {
        result.innerHTML = ''
        const data = await axios.get(`api/people/${value}`)
        console.log(data)
        if(data.status === 200) {
            box.style.visibility = 'visible'
            if(data.data.data == null) {
                const span = document.createElement('span')
                span.innerHTML = `The person you are looking for does not exist`;
                e.target.input.value = '';
                return result.appendChild(span)
            }
            const name = data.data.data.name;
            const school = data.data.data.school;
            const age = data.data.data.age;
            const span = document.createElement('span')
            span.innerHTML = `${name} is ${age} and goes to ${school}`;
            result.appendChild(span)
        }
    } catch(err) {
        console.error(err)
    }
    

    e.target.input.value = '';
})