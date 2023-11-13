async function getFromAPI() {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    console.log(data.results[0])
    const picture = '<img src=\"' + data.results[0].picture.large + '\" width="128" height="128">'
    const cell = '<div class="info">' + 'Cell: ' + data.results[0].cell + '</div>'
    const country = '<div class="info">' + 'Country: ' + data.results[0].location.country + '</div>'
    const email = '<div class="info">' + 'E-mail: ' + data.results[0].email + '</div>'
    const coordinates = '<div class="info">' + 'Coordinates: ' + data.results[0].location.coordinates.latitude + '; ' + data.results[0].location.coordinates.longitude + '</div>'
    const dataSet = [picture, cell, country, email, coordinates]
    return dataSet
}

async function getData() {
    for (var i = 1; i < 6; i++) {
        let currentObject = 'person' + i
        let person = document.getElementById(currentObject)
        let data = await getFromAPI()
        person.innerHTML = data[0] + data[1] + data[2] + data[3] + data[4]
    }
}
