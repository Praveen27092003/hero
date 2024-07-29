/////// API   https://superheroapi.com/
/////// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '48f1893a845d4f3b27f361093447eae4'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searcButton = document.getElementById('searcButton')
const searchInput = document.getElementById('searchInput') 
const heroAboutDiv = document.getElementById('heroAboutDiv')
const heroName = document.getElementById('heroName')
const heroIntelligence = document.getElementById('heroIntelligence')
const heroGender = document.getElementById('heroGender')
// const heroStrength = document.getElementById('heroStrength')
// const heroSpeed = document.getElementById('heroSpeed')
// const heroDurability = document.getElementById('heroDurability')
// const heroPower = document.getElementById('heroPower')


const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json =>{
    console.log(json)
    heroName.innerText = "Name :" +json.name

    heroImageDiv.innerHTML = `<img src="${json.image.url}" height=200 width=200 />`


    heroGender.innerText = "Gender :" +json.appearance.gender
    const stats = showHeroInfo(json)            
    heroAboutDiv.innerHTML =`${stats}`



    // heroIntelligence.innerText = "Intelligence :" +json.powerstats.intelligence
    // heroStrength.innerText = "Strength :" +json.powerstats.strength
    // heroSpeed.innerText = "Speed :" +json.powerstats.speed
    // heroDurability.innerText = "Durability :" +json.powerstats.durability
    // heroPower.innerText = "Power :" +json.powerstats.power



})
}

const getSearchSuperHero = (name) => {
    // console.log(searchInput.value);
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
       const hero = json.results[0]
        // console.log(hero)


    heroName.innerText = "Name :" + hero.name
    heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200 />`
    heroGender.innerText = "Gender :" +hero.appearance.gender

    const stats = showHeroInfo(hero)
    heroAboutDiv.innerHTML =`${stats}`

    // heroIntelligence.innerText = "Intelligence :" +hero.powerstats.intelligence
    // heroStrength.innerText = "Strength :" +hero.powerstats.strength
    // heroSpeed.innerText = "Speed :" +hero.powerstats.speed
    // heroDurability.innerText = "Durability :" +hero.powerstats.durability
    // heroPower.innerText = "Power :" +hero.powerstats.power



})
}

////////

const statToEmoji = {
    intelligence : '🧠',
    strength : '💪',
    speed :'⚡',
    durability :'🏋️‍♀️',
    power :'🔥',
    combat :'🧨'
}

const showHeroInfo =(character) =>{
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p> ${statToEmoji[stat]} ${stat} : ${character.powerstats[stat]} </p>`
    })
    console.log(stats.join(''))
    return stats.join('')
}

const randomHero = () =>{
    const numberOfHeros = 731
    return Math.floor(Math.random()*numberOfHeros)+1
}

newHeroButton.onclick = () =>{
    getSuperHero(randomHero())

}

searcButton.onclick = () => {
    getSearchSuperHero(searchInput.value)
}



