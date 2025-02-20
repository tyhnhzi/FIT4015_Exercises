const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
const totalItems = document.getElementById('total-items');

const products = [
    { name: 'Sản phẩm 1'},
    { name: 'Sản phẩm 2'},
    { name: 'Sản phẩm 3'}
];

// Hiển thị danh sách sản phẩm
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <button onclick="addToCart('${product.name}')">Thêm vào giỏ hàng</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName) {
    const cartItem = document.createElement('li');
    cartItem.textContent = productName;
    cart.appendChild(cartItem);
    updateTotalItems();
}
// Cập nhật tổng số sản phẩm
function updateTotalItems() {
    totalItems.textContent = cart.children.length;
}
displayProducts();