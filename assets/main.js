let city = prompt('Название города')
let year = prompt('Год образования')
let people = prompt('Население города')

// вычисление возраста города
let this_year = 2023
let vozrast = this_year - year

alert('Городу ' + city + ' исполнилось ' + vozrast + ' лет с момента его образования. ' + people + ' человек ')