const { Router } = require("express");
const { getAllCategories, getAllItemsByCategory, addNewCategoryGet, addNewCategoryPost, deleteCategoryPost, deleteItemFromCategoryPage } = require("../controllers/showAllCategories");
const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);

categoriesRouter.get("/:id/items", getAllItemsByCategory);
categoriesRouter.post("/:id/items/:item_id/delete", deleteItemFromCategoryPage);

categoriesRouter.get("/new", addNewCategoryGet);
categoriesRouter.post("/new", addNewCategoryPost);

categoriesRouter.post("/:id/delete", deleteCategoryPost)

module.exports = categoriesRouter;