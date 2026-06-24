// ==========================================
// E-COMMERCE WEBSITE MAIN JAVASCRIPT
// Modern, responsive shopping experience
// ==========================================

// ========== CART STATE MANAGEMENT ==========
class ShoppingCart {
    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.saveToLocalStorage();
        return existingItem ? 'updated' : 'added';
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveToLocalStorage();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    clear() {
        this.items = [];
        this.saveToLocalStorage();
    }
}

// ========== INITIALIZE CART ==========
const cart = new ShoppingCart();

// ========== DOM ELEMENTS ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const mobileNav = document.getElementById('mobile-nav');
const cartToggle = document.getElementById('cart-toggle');
const closCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const productsList = document.getElementById('products-list');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort-select');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const toast = document.getElementById('toast');
const shopNowBtn = document.getElementById('shop-now-btn');
const continueShoppingBtn = document.getElementById('continue-shopping');
const checkoutBtn = document.getElementById('checkout-btn');
const loadingSpinner = document.getElementById('loading-spinner');

// ========== NAVIGATION & HAMBURGER MENU ==========
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// ========== SHOPPING CART TOGGLE ==========
cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
});

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

closCart.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

continueShoppingBtn.addEventListener('click', closeCart);

// ========== PRODUCTS RENDERING ==========
function renderProducts(products) {
    if (products.length === 0) {
        productsList.innerHTML = '<p style="text-align: center; padding: 2rem; color: #757575; grid-column: 1/-1;">No products found.</p>';
        return;
    }

    productsList.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-header">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                        <span>${product.rating} (${product.reviews} reviews)</span>
                    </div>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="btn-wishlist" data-product-id="${product.id}" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        btn.addEventListener('click', handleWishlist);
    });
}

// ========== ADD TO CART HANDLER ==========
function handleAddToCart(e) {
    const productId = parseInt(e.currentTarget.dataset.productId, 10);
    const product = PRODUCTS.find(p => p.id === productId);

    if (product) {
        cart.addItem(product);
        showToast(`${product.name} added to cart!`);
        updateCartUI();
    }
}

// ========== WISHLIST HANDLER ==========
function handleWishlist(e) {
    const btn = e.currentTarget;
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        btn.innerHTML = '<i class="fas fa-heart"></i>';
        showToast('Added to wishlist!');
    } else {
        btn.innerHTML = '<i class="far fa-heart"></i>';
    }
}

// ========== CART UI UPDATES ==========
function updateCartUI() {
    cartCount.textContent = cart.getItemCount();
    renderCartItems();
    updateCartTotals();
}

function renderCartItems() {
    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-control">
                    <button class="quantity-btn" data-product-id="${item.id}" data-action="decrease">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" data-product-id="${item.id}" min="1" readonly>
                    <button class="quantity-btn" data-product-id="${item.id}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-btn" data-product-id="${item.id}" title="Remove from cart">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', handleQuantityChange);
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', handleRemoveItem);
    });
}

function handleQuantityChange(e) {
    const productId = parseInt(e.currentTarget.dataset.productId, 10);
    const action = e.currentTarget.dataset.action;
    const item = cart.items.find(i => i.id === productId);

    if (item) {
        const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        cart.updateQuantity(productId, newQuantity);
        updateCartUI();
    }
}

function handleRemoveItem(e) {
    const productId = parseInt(e.currentTarget.dataset.productId, 10);
    cart.removeItem(productId);
    updateCartUI();
    showToast('Item removed from cart');
}

function updateCartTotals() {
    const subtotal = cart.getTotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// ========== CHECKOUT HANDLER ==========
checkoutBtn.addEventListener('click', () => {
    if (cart.items.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    showToast('Processing checkout...');
    setTimeout(() => {
        showToast('Thank you for your purchase! Order placed successfully.');
        cart.clear();
        updateCartUI();
        closeCart();
    }, 1500);
});

// ========== SEARCH & FILTER LOGIC ==========
let filteredProducts = [...PRODUCTS];

function filterAndSortProducts() {
    let products = [...PRODUCTS];
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm) {
        products = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    const category = categoryFilter.value;
    if (category !== 'all') {
        products = products.filter(p => p.category === category);
    }

    const sortValue = sortSelect.value;
    switch (sortValue) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            products.sort((a, b) => b.id - a.id);
            break;
    }

    filteredProducts = products;
    showLoadingSpinner(true);

    setTimeout(() => {
        renderProducts(filteredProducts);
        showLoadingSpinner(false);
    }, 300);
}

searchInput.addEventListener('input', filterAndSortProducts);
categoryFilter.addEventListener('change', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);

// ========== LOADING SPINNER ==========
function showLoadingSpinner(show) {
    if (show) {
        loadingSpinner.style.display = 'flex';
        loadingSpinner.querySelector('.spinner').classList.add('active');
    } else {
        loadingSpinner.querySelector('.spinner').classList.remove('active');
        loadingSpinner.style.display = 'none';
    }
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message) {
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== SHOP NOW BUTTON ==========
shopNowBtn.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(PRODUCTS);
    updateCartUI();

    setTimeout(() => {
        showToast('Welcome to DyQani!');
    }, 500);
});

// ========== SELLER REGISTRATION ==========
const sellerForm = document.getElementById('seller-form');

if (sellerForm) {
    sellerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const sellerData = {
            shopName: document.getElementById('shop-name').value,
            sellerName: document.getElementById('seller-name').value,
            sellerEmail: document.getElementById('seller-email').value,
            sellerPhone: document.getElementById('seller-phone').value,
            shopCategory: document.getElementById('shop-category').value,
            shopDescription: document.getElementById('shop-description').value,
            createdDate: new Date().toISOString()
        };

        // Save to localStorage
        const existingSellers = JSON.parse(localStorage.getItem('sellers') || '[]');
        existingSellers.push(sellerData);
        localStorage.setItem('sellers', JSON.stringify(existingSellers));

        // Show success message
        showToast(`🎉 Welcome, ${sellerData.shopName}! Your shop has been created successfully!`);

        // Reset form
        sellerForm.reset();

        // Scroll to products after delay
        setTimeout(() => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
}

// ========== PERFORMANCE: LAZY LOADING IMAGES ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
