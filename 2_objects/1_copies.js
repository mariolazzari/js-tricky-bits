(_ => {
  const kitty = {
    name: "Squiggy",
    color: "orange",
    age: 5,
    chipId: "ZA123456",

    offspring: ["Mars", "Jupiter", "Mercury"],
    bestFriend: {
      name: "Crackers",
    },

    meow: function () {
      return "Meow, says " + this.name;
    },
  };

  // JSON
  const mudge = JSON.parse(JSON.stringify(kitty));
  mudge.name = "Mudge";
  mudge.chipId = "YYZ123";
  // debugger;

  // assing
  const knuckle = Object.assign({}, kitty);
  // knuckle = {...kitty};
  knuckle.name = "Knuckle";
  knuckle.bestFriend.name = "Bones";
  knuckle.meow = function () {
    return "Yeeeeeeow, says " + this.name;
  };
  // debugger;

  // lodash
  const comma = _.cloneDeep(kitty);
  comma.name = "Comma";
  comma.bestFriend.name = "Dash";
  // debugger;
})(_);
