import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
let intWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  return app.use("/", router);
};
module.exports = intWebRouter;
