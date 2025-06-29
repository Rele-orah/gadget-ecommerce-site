let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart.`);
}

function displayCart() {
  const cartList = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  if (!cartList || !totalEl) return;

  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  alert('Thank you for your purchase!');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

document.addEventListener('DOMContentLoaded', displayCart);
