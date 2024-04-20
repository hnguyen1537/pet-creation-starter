const { createAnimal, Dog, Cat, ANIMAL_TYPE } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Dog named Marley age 5 should return age', () => {
    const marley = Dog('Marley', 5);
    expect(marley.getAge()).toBe(5);
  });
  test('Dog named Oscar age 5 should have type DOG', () => {
    const oscar = Dog('Oscar', 5);
    expect(oscar.getType()).toBe('DOG');
  });
  test('Dog named Milo age 15 should say woof', () => {
    const milo = Dog('Milo', 15);
    expect(milo.saySomething()).toBe('woof');
  });
  test('Dog named Oscar age 10 print out info', () => {
    const oscar = Dog('Oscar', 10);
    expect(oscar.toString()).toBe('Name: Oscar\nAge: 10\nType: DOG');
  });
  test('Dog named Marley age 5 should return name', () => {
    const marley = Dog('Marley', 5);
    expect(marley.getName()).toBe('Marley');
  });
  test('Cat named MewTwo age 2 should return name', () => {
    const mewTwo = Cat('MewTwo', 2);
    expect(mewTwo.getName()).toBe('MewTwo');
  });
  test('Cat named MewTwo age 7 should return age', () => {
    const mewTwo = Cat('MewTwo', 7);
    expect(mewTwo.getAge()).toBe(7);
  });
  test('Cat named Oscar age 5 should return type CAT', () => {
    const oscar = Cat('Oscar', 5);
    expect(oscar.getType()).toBe('CAT');
  });
  test('Cat named Lucy age 15 should say meow', () => {
    const lucy = Cat('Lucy', 15);
    expect(lucy.saySomething()).toBe('meow');
  });
  test('Cat named Lucy age 10 should return all info', () => {
    const lucy = Cat('Lucy', 10);
    expect(lucy.toString()).toBe('Name: Lucy\nAge: 10\nType: CAT');
  });
  test('Cat named MewTwo age 2 using createAnimal should return name', () => {
    const mewTwo = createAnimal('MewTwo', ANIMAL_TYPE.CAT, 2);
    expect(mewTwo.getName()).toBe('MewTwo');
  });
  test('Cat named MewTwo age 7 using createAnimal should return age', () => {
    const mewTwo = createAnimal('MewTwo', ANIMAL_TYPE.CAT, 7);
    expect(mewTwo.getAge()).toBe(7);
  });
  test('Cat named Lucy age 15 using createAnimal should say meow', () => {
    const lucy = createAnimal('Lucy', ANIMAL_TYPE.CAT, 15);
    expect(lucy.saySomething()).toBe('meow');
  });
  test('Cat named Lucy age 10 using createAnimal should return all info', () => {
    const lucy = createAnimal('Lucy', ANIMAL_TYPE.CAT, 10);
    expect(lucy.toString()).toBe('Name: Lucy\nAge: 10\nType: CAT');
  });
  test('Dog named Marley age 10 using createAnimal should return name', () => {
    const marley = createAnimal('Marley', ANIMAL_TYPE.DOG, 5);
    expect(marley.getName()).toBe('Marley');
  });
  test('Dog named Marley age 5 using createAnimal should return age', () => {
    const marley = createAnimal('Marley', ANIMAL_TYPE.DOG, 5);
    expect(marley.getAge()).toBe(5);
  });
  test('Dog named Marley age 5 using createAnimal should return type', () => {
    const oscar = createAnimal('Oscar', ANIMAL_TYPE.DOG, 5);
    expect(oscar.getType()).toBe('DOG');
  });
  test('Dog named Milo age 15 using createAnimal should say woof', () => {
    const milo = createAnimal('Milo', ANIMAL_TYPE.DOG, 15);
    expect(milo.saySomething()).toBe('woof');
  });
  test('Dog named Oscar age 10 using createAnimal should return all info', () => {
    const oscar = createAnimal('Oscar', ANIMAL_TYPE.DOG, 10);
    expect(oscar.toString()).toBe('Name: Oscar\nAge: 10\nType: DOG');
  });
  test('Cat named Oscar age 5 using createAnimal should return type', () => {
    const oscar = createAnimal('Oscar', ANIMAL_TYPE.CAT, 5);
    expect(oscar.getType()).toBe('CAT');
  });
});
