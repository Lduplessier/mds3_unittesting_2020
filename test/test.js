const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
  expect(isAnagram()).toBeDefined()
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema','iceman')).toBeTruthy()
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello','Aloha')).toBeFalsy()
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(functions.createUser(user)).toBe('Jeff')
    });

  test('User is Karen', () => {
    const user = 'Karen';
    //Check if the user is Karen
    // Complete here
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toEqual(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2,2)).not(5)
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect (functions.isNull()).toBeNull
});

// toBeFalsy
test('Should be falsy', () => {
  // Complete here
});

// toEqual
test('User should be Marc Antoine object', () => {
  // Complete here
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect (functions.add(load1,load2)).toEqual(1000)
});

// Regex
test('There is no I in the word team', () => {
  // Complete here
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  // Complete here
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  // Complete here
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  // Complete here
});

test('String reverses', () => {
  // Complete here
});

test('String reverses with uppercase', () => {
  // Complete here
});
