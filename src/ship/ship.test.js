const Ship = require('./ship')

test('Ship length is undefined', () => {
  const ship = new Ship();
  expect(ship.length).toEqual(undefined);
})

test('Ship takes 1 hit (num_hits)', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.num_hits).toEqual(1);
})

test('Ship takes 1 hit (not sunk)', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toEqual(false);
})

test('Ship takes 2 hits (num_hits)', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.num_hits).toEqual(2);
})

test('Ship takes 2 hit (sunk)', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
})

test('Ship takes 4 hits (num_hits)', () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.num_hits).toEqual(4);
})

test('Ship takes 4 hit (not sunk)', () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(false);
})

test('Ship takes 5 hit (sunk)', () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
})