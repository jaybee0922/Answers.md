//Database
// CREATE TABLE product_category (
//     id INT PRIMARY KEY,
//     name VARCHAR(255),
//     desc TEXT,
//     created_at TIMESTAMP,
//     modified_at TIMESTAMP,
//     deleted_at TIMESTAMP
// );

// CREATE TABLE product (
//     id INT PRIMARY KEY,
//     name VARCHAR(255),
//     desc TEXT,
//     SKU VARCHAR(255),
//     category_id INT REFERENCES product_category(id),
//     inventory_id INT REFERENCES product_inventory(id),
//     price DECIMAL,
//     discount_id INT REFERENCES discount(id),
//     created_at TIMESTAMP,
//     modified_at TIMESTAMP,
//     deleted_at TIMESTAMP
// );

// CREATE TABLE product_inventory (
//     id INT PRIMARY KEY,
//     quantity INT,
//     created_at TIMESTAMP,
//     modified_at TIMESTAMP,
//     deleted_at TIMESTAMP
// );

// CREATE TABLE discount (
//     id INT PRIMARY KEY,
//     name VARCHAR(255),
//     desc TEXT,
//     discount_percent DECIMAL,
//     active BOOLEAN,
//     created_at TIMESTAMP,
//     modified_at TIMESTAMP,
//     deleted_at TIMESTAMP
// );




//Javascript to fetch the data from database

const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Replace with your actual database connection

class ProductCategory extends Model {}
ProductCategory.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
}, { sequelize });

class Product extends Model {}
Product.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    SKU: DataTypes.STRING,
    price: DataTypes.DECIMAL,
}, { sequelize });

class ProductInventory extends Model {}
ProductInventory.init({
    quantity: DataTypes.INTEGER,
}, { sequelize });

class Discount extends Model {}
Discount.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    discount_percent: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN,
}, { sequelize });

// Associations:
Product.belongsTo(ProductCategory);
Product.belongsTo(ProductInventory);
Product.belongsTo(Discount);
