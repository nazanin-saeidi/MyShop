//const products = [];
const fs = require("fs");
const path = require("path");

module.exports = class Product {
	constructor(title, description, price) {
		this.title = title;
		this.description = description;
		this.price = price;
	}

	saveProductData() {
		products.push(this);
		const filePath = path.join(
			path.dirname(process.mainModule.filename),
			"data",
			"products.json"
		); //deprecated
		fs.readFile(filePath, (err, fileContent) => {
			let products = [];
			if (!err) {
				products = JSON.parse(fileContent);
			}
			products.push(this);
			fs.writeFile(filePath, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAllProducts(callback) {
		const filePath = path.join(
			path.dirname(process.mainModule.filename),
			"data",
			"products.json"
		); //deprecated
		fs.readFile(filePath, (err, fileContent) => {
			if (err) {
				callback([]);
			}
			callback(JSON.parse(fileContent));
		});
	}
};
