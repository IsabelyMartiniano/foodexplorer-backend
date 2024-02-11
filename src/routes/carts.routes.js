const { Router } = require("express");

const CartsController = require("../controllers/CartsController");
const ensureAuthenticated = require("../midlewares/ensureAuthenticated");
const ensureIsAdmin = require("../midlewares/ensureIsAdmin");

const cartsRoutes = Router();

const cartsController = new CartsController();

cartsRoutes.use(ensureAuthenticated);

cartsRoutes.post("/", cartsController.create);
cartsRoutes.get("/:id", cartsController.show);
cartsRoutes.get("/", ensureIsAdmin, cartsController.index);
cartsRoutes.delete("/:id", cartsController.delete);
cartsRoutes.put("/", cartsController.update);

module.exports = cartsRoutes;