const db = require("../db/queries");

const getAllCategories = async(req, res) => {
    const categories = await db.selectAllCategories();
    res.render("showAllCategories", {
        categories: categories,
        heading: "All Categories"
    })
}

const getAllItemsByCategory = async(req, res) => {
    const id = req.params.id;
    const items = await db.selectItemsByCategory(id);
    res.render("itemsByCategory", {
        items: items,
    })
}

const deleteItemFromCategoryPage = async(req, res) => {
    const {item_id} = req.params;
    console.log(item_id);
    await db.deleteItem(item_id);
    res.redirect("/items");
}

const addNewCategoryGet = (req, res) => {
    res.render("addNewCategory")
}

const addNewCategoryPost = async(req, res) => {
    let {category_name} = req.body;
    console.log(category_name);
    try{
        await db.insertCategory(category_name);
    }catch(err){
        console.log(err);

    }
    res.redirect("/categories");
}

const deleteCategoryPost = async(req, res) => {
    let {id} = req.params;
    console.log(id);
    await db.deleteCategory(id);
    res.redirect("/categories");

}

module.exports = {
    getAllCategories,
    getAllItemsByCategory,
    addNewCategoryGet,
    addNewCategoryPost,
    deleteCategoryPost,
    deleteItemFromCategoryPage

}