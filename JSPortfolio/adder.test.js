const adder = require('./adder')

test('adds 1 + 2 to equal 3', () => 
    { expect(adder(1, 2)).toBe(3); }
);
