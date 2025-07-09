const db = require("../db/queries");

const getAllItems = async(req, res) => {
    const items = await db.selectAllItems();
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
    const id = req.params.id;
    const item = await db.selectItemByItemId(id);
    const categories = await db.selectAllCategories();
    res.render("updateItem", {
        item_id: item[0].item_id,
        item_name: item[0].item_name,
        item_quantity: item[0].item_quantity,
        category_id: item[0].category_id,
        categories : categories
    })
}

const updateItemPost = async(req, res) => {
    let {item_name, item_quantity, category_id} = req.body;
    const {id} = req.params;
    item_quantity = Number(item_quantity);
    await db.updateItem(item_name, item_quantity, category_id, id);
    res.redirect("/items");
}

module.exports = {
    getAllItems,
    addNewItemGet,
    addNewItemPost,
    deleteItemPost,
    updateItemGet,
    updateItemPost
}