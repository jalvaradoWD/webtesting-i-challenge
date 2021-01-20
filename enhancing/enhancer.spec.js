const enhancer = require('./enhancer.js');
// const { TestScheduler } = require('jest');

// test away!

test('Check if item is repaired to the value of 100', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 10,
  });

  const expectedValue = 100;

  // execute the code on the test

  enhancer.repair(testItem);
  const actualValue = testItem.durability;

  // assert results

  expect(actualValue).toBe(expectedValue);
});

test('Check to see if enhancement succeeds with a enhancement value below 20.', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 15,
  });

  const expectedValue = 16;

  // execute the code on the test

  enhancer.success(testItem);
  const actualValue = testItem.enhancement;

  // assert results

  expect(actualValue).toBe(expectedValue);
});

test('Check to see if enhancement succeeds with a enhancement value with 20. If so that value stays at 20.', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 20,
  });

  const expectedValue = 20;

  // execute the code on the test

  enhancer.success(testItem);
  const actualValue = testItem.enhancement;

  // assert results

  expect(actualValue).toBe(expectedValue);
});

test('When enhancement fail with the value less that 15, durability decreases by 5.', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 10,
  });

  const expectedValue = 45;

  // execute the code on the test

  enhancer.fail(testItem);
  const actualValue = testItem.durability;

  // assert results

  expect(actualValue).toBe(expectedValue);
});

test('When enhancement fail with the value is or greater than 15, durability decreases by 10.', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 15,
  });

  const expectedValue = 40;

  // execute the code on the test

  enhancer.fail(testItem);
  const actualValue = testItem.durability;

  // assert results

  expect(actualValue).toBe(expectedValue);
});

test('When enhancement fail with the value greater than 16, enhancement decreases by 1.', () => {
  // setup
  const testItem = new enhancer.Item({
    name: 'A new Item',
    durability: 50,
    enhancement: 17,
  });

  const expectedValueEnhancement = 16;
  const expectedValueDurability = 40;

  // execute the code on the test

  enhancer.fail(testItem);
  const actualValueEnhancement = testItem.enhancement;
  const actualValueDurability = testItem.durability;

  // assert results

  expect(actualValueEnhancement).toBe(expectedValueEnhancement);
  expect(actualValueDurability).toBe(expectedValueDurability);
});
