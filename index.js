const ANIMAL_TYPE = {
  DOG: 'DOG',
  CAT: 'CAT',
};

// TODO: Implement this function.
function Dog(name, age) {
  // Returns the name of the dog.
  this.getName = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns the age of the dog.
  this.getAge = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns a description of the dog in the following format:
  // 'Name: <name>\nAge: <age>\nType: <type>'
  this.toString = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns the type of the dog.
  // HINT: just reutrn ANIMAL_TYPE.DOG
  this.getType = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns a string 'woof'.
  this.saySomething = function () {
    return null;
  };

  return this;
}

// TODO: Implement this function.
function Cat(name, age) {
  // Returns the name of the cat.
  this.getName = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns the age of the cat.
  this.getAge = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns a description of the cat.
  this.toString = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns the type of the cat.
  this.getType = function () {
    // TODO: Implement this function.
    return null;
  };

  // Returns a string 'meow'.
  this.saySomething = function () {
    // TODO: Implement this function.
    return null;
  };

  return this;
}

// TODO: Implement this function.
function createAnimal(name, type, age) {
  // TODO: Choose the right constructor given the type of an animal.
  // For example, if the type is ANIMAL_TYPE.DOG, then use Dog(name, age)
  // to create this animal.
  let animal = new Object();

  return animal;
}

const fido = createAnimal('Fido', ANIMAL_TYPE.DOG, 5);
console.log(fido.getType()); // Should return 'DOG'.
console.log(fido.getName()); // Should return 'Fido'.
console.log(fido.getAge()); // Should return 5.
console.log(fido.toString()); // Should return 'Name: Fido\nAge: 5\nType: DOG'.

const mew = createAnimal('Mew', ANIMAL_TYPE.CAT, 1);
console.log(mew.getType()); // Should return 'CAT'.
console.log(mew.getName()); // Should return 'Mew'.
console.log(mew.getAge()); // Should return 1.
console.log(mew.toString()); // Should return 'Name: Mew\nAge: 1\nType: CAT'.

module.exports = {
  createAnimal: createAnimal,
  Dog: Dog,
  Cat: Cat,
  ANIMAL_TYPE: ANIMAL_TYPE,
};
