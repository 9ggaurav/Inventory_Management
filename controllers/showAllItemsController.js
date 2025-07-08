const db = require("../db/queries");

const getAllItems = async(req, res) => {
    const items = await db.selectAllItems();
    // console.log(items);
    res.render("showAllItems", {
        items: items,
        heading: "All Items",
    })
}

const addNewItemGet = async(req, res) => {
    const categories = await db.selectAllCategories();
    res.render("addNewItem", {
        categories: categories
    })
}

const addNewItemPost = async(req, res) => {
    let {item_name, item_quantity, category_id} = req.body;
    console.log(item_name, item_quantity, category_id)
    item_quantity = Number(item_quantity);
    try{
        await db.insertItem(item_name, item_quantity, category_id);
    }catch(err){
        console.log(err);
    }
    
    res.redirect("/items")
}

const deleteItemPost = async(req, res) => {
    let {id} = req.params;
    console.log(id);
    await db.deleteItem(id);
    res.redirect("/items");
}

const updateItemGet = async(req, res) => {
    let item
}

const updateItemPost = async(req, res) => {

}

module.exports = {
    getAllItems,
    addNewItemGet,
    addNewItemPost,
    deleteItemPost,
    updateItemGet,
    updateItemPost
}