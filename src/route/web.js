import express from "express";

let router = express.Router();
let intWebRouter = (app) => {
  router.get("/", (req, res) => {
    return res.send(" hello nodejs");
  });
  return app.use("/", router);
};
module.exports = intWebRouter;
