const fs = require("fs");

fs.readFile("./texts/read.txt", "utf-8", (data, error) => {
  if (error) {
    throw error;
  }
  console.log(data);
  //   writing
  fs.writeFile("./texts/read2.txt", data, "utf-8", (error) => {
    if (error) {
      throw error;
    }
  });
});
