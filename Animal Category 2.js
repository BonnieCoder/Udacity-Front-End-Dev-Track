var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */
 
var category = eatsAnimals ? ( eatsPlants ? "omnivore" : "carnivore") : (eatsPlants ? "herbivore" : "undefined");

console.log(category);
