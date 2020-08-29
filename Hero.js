class Hero {
  //constructor is a special function for creating an object
  constructor(name, level) {
    //set inital proerties.
    this._name = name;
    this._level = level;
  }

  //Getters

  get name() {
    return this._name;
  }

  //Setters
  set name(newName) {
    this._name = newName;
  }

  //Methods
  greet() {
    return `Hello, my name is ${this._name}
                    and my level is ${this._level}`;
  }
  levelUp() {
    this._level = this._level + 1;
  }
}

module.exports = Hero; // CommonJS export
//export Hero;            //ES6 modules
