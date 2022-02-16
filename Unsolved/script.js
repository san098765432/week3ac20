
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// canis major needs to be added to the var constellations array. it also needs to be the first element in the array. 

console.log (constellations);
constellations.unshift ('canis major');
console.log (constellations);


// remove venus from the planets array 

console.log(planets);
planets.pop ();
console.log(planets);


//combine constellations and planet arrays

const galaxy = constellations.concat(planets);
console.log(galaxy);


//It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.


console.log (star);
var newstring=star.toUpperCase();
console.log(newstring);

