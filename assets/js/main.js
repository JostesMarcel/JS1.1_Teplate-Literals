let vorName = "Marcel"
let lastName = "Jostes"
let age = "29"
let birthPlace = "Essen"
let size = "1,79"
let weight = "100kg"
let hobby = "Playing Videogames, Meet Friends & Play Football"
let vidGames = "Apex Legends, Warzone, Mr. Autofire"
let favFood = "Pizza, Burger"
let favPlace = "My Hometown"
let favBrand = "Nike, Puma, Adiddas"
let favYearTime = "Spring"
let favTravelPlace = "Karibik"

favText = `My Name is ${vorName} ${lastName} i am ${age} and my Bithplace is ${birthPlace}. My actuell size is ${size} and weight is ca.${weight}. My Hobbys are ${hobby}. Acutally i playing ${vidGames}. After a hard workday, i love ${favFood}. My Place to be is ${favPlace}. My Favorite Fashion Brands are: ${favBrand}. I love the Yeartime ${favYearTime} so much. But i like more the weather in ${favTravelPlace}.`
console.log(favText)

let out = document.getElementById("output")
out.innerHTML = favText