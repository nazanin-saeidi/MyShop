const products = [];

module.exports.addProductPage = (request, response) => {
	response.render("add-product");
};

module.exports.sendAllProducts = (request, response) => {
	products.push({
		title: request.body.title,
		description: request.body.description,
	});
	response.redirect("/");
};

module.exports.getAllProducts = (request, response) => {
	response.render("shop", {
		pageTitle: "Online Shop",
		productsArray: products,
	});
};
