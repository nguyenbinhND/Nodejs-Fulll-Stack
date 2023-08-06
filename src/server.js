// import express from "express";
// import bodyParser from "body-parser";
// import viewEngine from "./config/viewEngine";
// import initWebRouter from "./route/web";
// // require("dotenv").config(); // gọi hàm để chạy dòng port 14
// const dotenv = require("dotenv");
// dotenv.config({ path: "src/.env" });
// let app = express();
// // config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// viewEngine(app);
// initWebRouter(app);

// let port = process.env.PORT || 6969;
// app.listen(port, () => {
//   console.log(" xin chao" + port);
// });

import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
  //callback
  console.log(`Example app listening on port http://localhost:${port}`);
});
