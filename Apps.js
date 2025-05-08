// Simple cart functionality
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart!`);
  console.log("Cart:", cart);
}

// You can expand this to display the cart or persist it in local storage.