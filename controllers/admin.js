const Product = require("../models/single-product");

module.exports.addProductPage = (request, response) => {
	response.render("admin/add-product");
};

module.exports.sendAllProducts = (request, response) => {
	const products = new Product(
		request.body.title,
		request.body.description,
		request.body.price
	);
	products.saveProductData();
	response.redirect("/");
};
