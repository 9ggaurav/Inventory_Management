const pool = require("./pool");


const selectAllCategories = async() => {
    const { rows } = await pool.query(`
        SELECT * FROM categories;
        `)
    return rows;
}

const selectAllItems = async() => {
    const { rows } = await pool.query(`
        select items.item_id, items.item_name, items.item_quantity, categories.category_name, items.updated_at
        from items
        join categories on items.category_id = categories.category_id;
        `)
    return rows;
}

const selectItemByItemId = async(item_id) => {
    const { rows } = await pool.query(`
        SELECT * FROM items
        WHERE
        item_id = $1;
        `, [item_id])

    return rows
}

const selectItemsByCategory = async (category_id) => {
    const { rows } = await pool.query(`
        SELECT items.item_id, items.item_name, items.item_quantity, categories.category_name, categories.category_id, items.updated_at
        FROM items
        JOIN categories ON items.category_id = categories.category_id
        WHERE items.category_id = $1
    `, [category_id]);
    return rows;
};

const insertItem = async (item_name, item_quantity, category_id) => {
    await pool.query(`
        INSERT INTO items (item_name, item_quantity, category_id)
        VALUES ($1, $2, $3)
        `, [item_name, item_quantity, category_id]);
}

const insertCategory = async(category_name) => {
    await pool.query(`
        INSERT INTO categories (category_name)
        VALUES ($1)
        `, [category_name])
}

const deleteCategory = async(category_id) => {
    await pool.query(`
        DELETE FROM categories WHERE category_id = ($1);
        `, [category_id])
}

const deleteItem = async(item_id) => {
    await pool.query(`
        DELETE FROM items WHERE item_id = ($1);
        `, [item_id]);
}

const updateItem = async(item_name, item_quantity, category_id, item_id) => {
    await pool.query(`
        UPDATE items
        SET item_name = $1, item_quantity = $2, category_id = $3, updated_at = now()
        WHERE item_id = $4;
        `, [item_name, item_quantity, category_id, item_id]);
}

module.exports = {
    selectAllCategories,
    selectAllItems,
    selectItemsByCategory, 
    insertItem,
    insertCategory,
    deleteCategory,
    deleteItem,
    selectItemByItemId,
    updateItem
}