import { HashMap } from "./hash-map.js";

const testing = new HashMap();

testing.set('apple', 'red')
testing.set('banana', 'yellow')
testing.set('carrot', 'orange')
testing.set('dog', 'brown')
testing.set('elephant', 'gray')
testing.set('frog', 'green')
testing.set('grape', 'purple')
testing.set('hat', 'black')
testing.set('ice cream', 'white')
testing.set('jacket', 'blue')
testing.set('kite', 'pink')
testing.set('lion', 'golden')

test("length test", () => {
  expect(testing.size).toBe(13);
})

testing.set('moon', 'silver')

test("testing to see if capacity has doubled", () => {
  expect(testing.capacity).toBe(32);
})

testing.set('apple', 'green')

test("testing to see if value of apple has been updated", () => {
  expect(testing.get('apple')).toBe('green');
})