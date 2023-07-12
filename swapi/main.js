let resBttn = document.querySelector('button')
const axios = require('axios')

const clickBttn = () => {
    const apiURL = 'https://swapi.dev/api/planets/?search=alderaan'
    axios
        .get(apiURL)
}

resBttn.addEventListener('click', clickBttn)