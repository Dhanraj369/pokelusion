// Removed unused import
// const {genIV} = require("./../functions.js");

// Simplified the fix function using array destructuring and a loop
const fix = (r) => {
  let gen = r;
  for (let i = 1; i <= 3; i++) {
    if (gen[i] === ".") {
      [gen] = gen.split(".", i + 1);
      break;
    }
  }
  return gen;
};

// Used nullish coalescing operator to simplify property initialization
const natures = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Docile", "Bold", "Relaxed",
  "Impish", "Lax", "Serious", "Timid", "Hasty", "Jolly", "Naive", "Bashful",
  "Modest", "Mild", "Quiet", "Rash", "Quirky", "Calm", "Gentle", "Sassy", "Careful"];

class Pokemon {
  constructor(object, lvl, xp) {
    this.level = lvl ?? 1; // Used nullish coalescing operator to set default value
    this.xp = xp ?? 0; // Used nullish coalescing operator to set default value
    this.name = object.name;
    this.url = object.url;
    this.hp = Math.floor(Math.random() * 31);
    this.atk = Math.floor(Math.random() * 31);
    this.def = Math.floor(Math.random() * 31);
    this.spatk = Math.floor(Math.random() * 31);
    this.spdef = Math.floor(Math.random() * 31);
    this.speed = Math.floor(Math.random() * 31);
    this.moves = [];
    this.shiny = object.shiny;
    this.rarity = object.rarity;
    // Removed redundant assignment
    // this.xp = 0;
    this.nature = natures[Math.floor(Math.random() * natures.length)];
    const totaliv = ((this.hp + this.atk + this.def + this.spatk + this.spdef + this.speed) / 186) * 100;
    this.totalIV = totaliv.toFixed(2);
  }
}

module.exports = {
  fix,
  Pokemon
};
