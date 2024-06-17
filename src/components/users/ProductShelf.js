import ProductCard from "./ProductCard";

const ProductShelf = {
  async render(category, products, categoryResponse) {
    // Filter products based on category
    const filteredCategory = categoryResponse.find(
      (cat) => cat.nama_kategori === category
    );
    const filteredProducts = products.filter(
      (product) => product.id_kategori === filteredCategory.id_kategori
    );

    // Render product cards
    const productCards = await ProductCard.render(filteredProducts);

    return `
<<<<<<< HEAD
      <div class="product-shelf mt-3">
        <h6>Menampilkan ${filteredProducts.length} produk untuk kategori <b>"${category}"</b></h6>
        <div class="product-wrapper">
          <div class="product-list mt-3">
            ${productCards}
          </div>
=======
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${filteredProducts.length} produk untuk kategori <b>"${category}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${productCards}
                </div>
            </div>
>>>>>>> efe2eeea272e680e116950db56b78b4f08f9ab3a
        </div>
      </div>
    `;
  },
};

export default ProductShelf;
