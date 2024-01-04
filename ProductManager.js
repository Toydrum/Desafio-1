class ProductManager {
	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	addProduct(product) {

		if (!product.id) {
			product.id = this.products.length;
		}

		const codeExist = this.products.some(
			(currentProducts) => currentProducts.code === product.code
		);

		if (codeExist) {
			console.error(`no se puede agregar el producto, porque ya existe`);
		} else {
			this.products.push(product);
		}
	}

	getProductById(id) {
		const product = this.products.find((item) => item.id === id);
		product
			? console.log("Encontrado", product)
			: console.error("No encontrado");
	}
}

const productManager1 = new ProductManager();
console.log(productManager1.products);
producto1 = {
	title: "producto prueba",
	description: "este es un producto de prueba",
	price: 200,
	thumbnail: "sin imagen",
	code: "abc123",
	stock: 25,
};

productManager1.addProduct(producto1)
console.log(productManager1.products);
productManager1.getProductById(0)
/* productManager1.addProduct(producto1) */
