var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category;
if (eatsPlants === true){
    if (eatsAnimals === true){
    category = "omnivore";
}
else{
    category = "herbivore";
}
}
else if (eatsPlants === false){
    if (eatsAnimals === true){
    category = "carnivore";
}
else{
    category = "undefined";
}
}

console.log(category);
