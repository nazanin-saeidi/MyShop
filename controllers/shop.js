const Product = require("../models/single-product");

module.exports.getAllProducts = (request, response) => {
	const products = Product.fetchAllProducts((products) => {
		response.render("shop/product-list", {
			pageTitle: "Online Shop",
			productsArray: products,
		});
	});
};
