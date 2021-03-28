const Product = require("../models/single-product");

module.exports.addProductPage = (request, response) => {
	response.render("add-product");
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

module.exports.getAllProducts = (request, response) => {
	const products = Product.fetchAllProducts((products) => {
		response.render("shop", {
			pageTitle: "Online Shop",
			productsArray: products,
		});
	});
};
