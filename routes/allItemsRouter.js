const { Router } = require("express");
const { getAllItems, addNewItemGet, addNewItemPost, deleteItemPost, updateItemGet, updateItemPost } = require("../controllers/showAllItemsController");
const itemsRouter = Router();

itemsRouter.get("/", getAllItems);

itemsRouter.get("/new", addNewItemGet);
itemsRouter.post("/new", addNewItemPost);

itemsRouter.post("/:id/delete", deleteItemPost);

itemsRouter.get("/:id/update", updateItemGet);
itemsRouter.post("/:id/update", updateItemPost);

module.exports = itemsRouter;