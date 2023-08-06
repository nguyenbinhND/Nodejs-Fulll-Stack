// import express from "express";

// let configViewEngine = (app) => {
//   app.use(express.static("./src/public")); //phía client public những file nằm trong public
//   app.set("view engine", "ejs"); // set ten file code logic là "ejs"
//   app.set("views", "./src/views"); //set duong dan den file view code logic js
// };
// module.exports = configViewEngine();

import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
