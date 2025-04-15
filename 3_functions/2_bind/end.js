(() => {
  const myApp = {
    dataSet: [
      {
        id: 1,
        animal: "cat",
        name: "Mittens",
      },
      {
        id: 2,
        animal: "dog",
        name: "Rex",
      },
      {
        id: 3,
        animal: "iguana",
        name: "Ms. Fancy",
      },
      {
        id: 4,
        animal: "fish",
        name: "Gilbert",
      },
      {
        id: 5,
        animal: "rabbit",
        name: "Bugs",
      },
    ],

    slot1: document.querySelector("#slot-1"),
    slot2: document.querySelector("#slot-2"),

    handleClick: (slotNumber, evt) => {
      evt.preventDefault();

      var item = this.dataSet.shift();
      if (!item) {
        console.error("No more items!");
        return false;
      }

      this.addItemToSlot(item, slotNumber);
    },

    addItemToSlot: (item, slotIndex) => {
      const itemDiv = document.createElement("div");
      itemDiv.id = "item-" + item.id;

      const itemContent = document.createElement("h3");
      itemContent.className = "text-xl font-bold";
      itemContent.textContent = item.name;
      itemDiv.appendChild(itemContent);
      this["slot" + slotIndex].appendChild(itemDiv);
    },

    init: () => {
      const btn1 = document.querySelector("#one");
      const btn2 = document.querySelector("#two");

      btn1.addEventListener("click", this.handleClick.bind(this, 1));
      btn2.addEventListener("click", this.handleClick.bind(this, 2));
    },
  };

  myApp.init();
})();
