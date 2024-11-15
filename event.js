const eventEmit = require("events");
const myEmit = new eventEmit();
myEmit.on("birthday", () => {
  console.log("happy birthday to you");
});
myEmit.on("birthday", (gift) => {
  console.log(`${gift} is for you `);
});

myEmit.emit("birthday", "bike");
