// 1. Create an array which value is the planets of the solar system.
let planets = [{
    name: 'Mercury',
    moons: 0
}, {
    name: 'Venus',
    moons: 0
}, {
    name: 'Earth',
    moons: 1
}, {
    name: 'Mars',
    moons: 2,
}, {
    name: 'Jupiter',
    moons: 80
}, {
    name: 'Saturn',
    moons: 83,
}, {
    name: 'Uranus',
    moons: 27
}, {
    name: 'Neptune',
    moons: 14
}]
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    planetDiv.classList.add('planet')
    planetDiv.textContent = planet.name
    // 3. Each planet should have a different background color. 
    // Colors are randomly generated
    planetDiv.style.backgroundColor = 'rgb(' + [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ].join(', ') + ')'

    console.log(planetDiv.style.backgroundColor)
    // '#' + (parseInt(planet.moons * Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 5000) * 100 % 256, 16)).toString().padStart(6, '0')
    // 4. Finally append each div to the <section> in the HTML (presented below)
    document.querySelector('section').appendChild(planetDiv)
    // 5. Bonus: Do the same process to create the moons. 
    if (planet.moons >= 1) {
        let moonDiv = document.createElement('div')
        moonDiv.classList.add('moon')
        moonDiv.textContent = planet.moons > 1 ? planet.moons.toString() : ''
        planetDiv.appendChild(moonDiv)
    }
    // document.querySelector('section').appendChild(moonDiv)
})