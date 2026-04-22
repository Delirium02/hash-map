import { HashMap } from "./index.js";

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
  expect(testing.size).toBe(12);
})