const Hero = require("./Hero"); //CommonJS IMPORT

//ES6 Importt
// import Hero from "./Hero";

const hero1 = new Hero("Chadwick", 1);

hero1.levelUp();
hero1.levelUp();
hero1.levelUp();
hero1.levelUp();
console.log(hero1.greet());

const hero2 = new Hero("Hank", 500);
console.log(hero2.greet());

console.log(hero1.name());
