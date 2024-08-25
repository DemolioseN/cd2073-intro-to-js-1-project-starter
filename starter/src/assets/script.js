// Create an array to hold all product objects
var products = [];

// Create 3 or more product objects using object literal notation
products.push({
  name: "Cherry",
  price: 1.99,
  quantity: 0,
  productId: 1,
  image: "https://Unsplash.com/images/cherry.jpg"
});

products.push({
  name: "Orange",
  price: 2.49,
  quantity: 0,
  productId: 2,
  image: "https://Unsplash.com/images/orange.jpg"
});

products.push({
  name: "Strawberry",
  price: 3.99,
  quantity: 0,
  productId: 3,
  image: "https://Unsplash.com/images/strawberry.jpg"
});

// Declare an empty array to hold the items in the cart
var cart = [];

// Helper function to get a product by productId
function getProduct(productId) {
  return products.find(product => product.productId === productId);
}

// Function to add a product to the cart
function addProductToCart(productId) {
  var product = getProduct(productId);
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  var product = getProduct(productId);
  if (product) {
    product.quantity++;
  }
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
  var product = getProduct(productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

// Function to remove a product from the cart
function removeProductFromCart(productId) {
  var product = getProduct(productId);
  if (product) {
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
  }
}

// Function to calculate the total cost of all products in the cart
function cartTotal() {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

// Function to empty the cart
function emptyCart() {
  cart.length = 0;
  products.forEach(product => product.quantity = 0);
}

// Function to pay for the products in the cart
let totalPaid = 0;
function pay(amount) {
  totalPaid += amount;
  if (amount < totalPaid) {
    return totalPaid - amount;
  } else {
    return amount - totalPaid;
  }
}

// Export the functions and variables for testing
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
};