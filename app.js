const express = require("express");
const path = require("node:path");
const homeRouter = require("./routes/homeRouter");
const allCategoriesRouter = require("./routes/allCategoriesRouter");
const allItemsRouter = require("./routes/allItemsRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views", "pages"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes
app.use('/', homeRouter);
app.use('/items', allItemsRouter);
app.use('/categories', allCategoriesRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err)
})

app.listen(PORT, () => {
    console.log(`Express app at localhost:${PORT}`)
});