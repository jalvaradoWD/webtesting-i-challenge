// A class to create a new Item object
class Item {
  constructor(props) {
    const { name, durability, enhancement } = { ...props };
    this.name = name;
    this.durability = durability || Math.floor(Math.random() * 10 + 1);
    this.enhancement = enhancement || Math.floor(Math.random() * 20 + 1);
  }

  repair() {
    this.durability = 100;
  }

  success() {
    if (this.enhancement !== 20) {
      this.enhancement += 1;
    }
  }

  fail() {
    if (this.enhancement < 15) {
      this.durability -= 5;
    } else if (this.enhancement >= 15) {
      this.durability -= 10;
      if (this.enhancement > 16) {
        this.enhancement -= 1;
      }
    }
  }
}

function success(item) {
  item.success();
  return { ...item };
}

function fail(item) {
  item.fail();
  return { ...item };
}

function repair(item) {
  item.repair();
  return { ...item };
}

function get(item) {
  return { ...item };
}

module.exports = {
  success,
  fail,
  repair,
  get,
  Item,
};
