const products = [
    // 1. البناء والتركيب
    {
        id: 1,
        name: "مكعبات البناء الخشبية",
        category: "building",
        categoryLabel: "البناء والتركيب",
        price: 26.00,
        image: "images/blocks.jpg",
        description: "مكعبات خشبية ملساء بألوان دافئة لتنمية الإبداع والتركيز."
    },
    {
        id: 2,
        name: "مجموعة قطع التركيب المبتكرة",
        category: "building",
        categoryLabel: "البناء والتركيب",
        price: 30.00,
        image: "images/lego.jpg",
        description: "قطع تركيب متنوعة تساعد الطفل على ابتكار أشكال ومجسمات جديدة."
    },
    {
        id: 3,
        name: "قطار المغامرات الخشبي",
        category: "building",
        categoryLabel: "البناء والتركيب",
        price: 32.00,
        image: "images/train.jpg",
        description: "قطار ألعاب لطيف يشجّع على اللعب التخيلي والتناسق الحركي."
    },
    {
        id: 4,
        name: "برج الحلقات المتدرجة",
        category: "building",
        categoryLabel: "البناء والتركيب",
        price: 21.00,
        image: "images/tower.jpg",
        description: "حلقات متدرجة الأحجام لتعلّم الترتيب والمقارنة بأسلوب مرح."
    },

    // 2. الدمى والشخصيات
    {
        id: 5,
        name: "دبدوب الأحضان القطني",
        category: "dolls",
        categoryLabel: "الدمى والشخصيات",
        price: 24.00,
        image: "images/plush.jpg",
        description: "دمية قطنية فائقة النعومة ومثالية لوقت اللعب والنوم."
    },
    {
        id: 6,
        name: "عروسة الصداقة اللطيفة",
        category: "dolls",
        categoryLabel: "الدمى والشخصيات",
        price: 28.00,
        image: "images/doll.jpg",
        description: "عروسة بتصميم رقيق تشجّع الطفل على المشاركة وسرد القصص."
    },
    {
        id: 7,
        name: "أرنب الربيع الناعم",
        category: "dolls",
        categoryLabel: "الدمى والشخصيات",
        price: 23.00,
        image: "images/bunny.jpg",
        description: "دمية أرنب قماشية خفيفة ومحببة للأطفال بأذنين طويلتين."
    },
    {
        id: 8,
        name: "دب الرحلات الصغير",
        category: "dolls",
        categoryLabel: "الدمى والشخصيات",
        price: 22.00,
        image: "images/bear.jpg",
        description: "رفيق لطيف بحجم مناسب لاصطحابه في النزهات والرحلات."
    },

    // 3. الذكاء والتعلّم
    {
        id: 9,
        name: "بازل الاكتشاف التعليمي",
        category: "learning",
        categoryLabel: "الذكاء والتعلّم",
        price: 19.00,
        image: "images/puzzle.jpg",
        description: "أحجية تعليمية تُنمّي مهارات حل المشكلات والملاحظة الدقيقة."
    },
    {
        id: 10,
        name: "لعبة الحس والاستكشاف",
        category: "learning",
        categoryLabel: "الذكاء والتعلّم",
        price: 27.00,
        image: "images/sensory.jpg",
        description: "لعبة حسية مستوحاة من أساليب التعلّم النشط لتنشيط الحواس."
    },
    {
        id: 11,
        name: "عداد الأرقام والتعلّم",
        category: "learning",
        categoryLabel: "الذكاء والتعلّم",
        price: 25.00,
        image: "images/abacus.jpg",
        description: "وسيلة تعليمية ممتعة للتعرّف على الأرقام والحساب البسيط."
    },
    {
        id: 12,
        name: "صندوق مطابقة الأشكال",
        category: "learning",
        categoryLabel: "الذكاء والتعلّم",
        price: 24.00,
        image: "images/shape.jpg",
        description: "يساعد الطفل على التمييز بين الأشكال والألوان وتقوية التركيز."
    },

    // 4. الحركة والفن
    {
        id: 13,
        name: "سيارة السباق الكلاسيكية",
        category: "play",
        categoryLabel: "الحركة والفن",
        price: 20.00,
        image: "images/car.jpg",
        description: "سيارة لعب سهلة الدفع ومناسبة للحركة والانطلاق داخل المنزل."
    },
    {
        id: 14,
        name: "حقيبة التلوين والإبداع",
        category: "play",
        categoryLabel: "الحركة والفن",
        price: 23.00,
        image: "images/art.jpg",
        description: "ألوان وأدوات رسم مبهجة لإطلاق خيال الطفل على الورق."
    },
    {
        id: 15,
        name: "كرة المرح الحركية",
        category: "play",
        categoryLabel: "الحركة والفن",
        price: 16.00,
        image: "images/ball.jpg",
        description: "لعبة حركية خفيفة تشجع على النشاط البدني واللعب الجماعي."
    },
    {
        id: 16,
        name: "مجموعة الأشغال اليدوية",
        category: "play",
        categoryLabel: "الحركة والفن",
        price: 25.00,
        image: "images/craft.jpg",
        description: "أدوات أنشطة فنية وتشكيل بسيطة لتطوير المهارات اليدوية."
    }
];

let cart = [];

const productsGrid = document.getElementById("products-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const toastEl = document.getElementById("toast");

function renderProducts(category = "all") {
    const filtered = category === "all"
        ? products
        : products.filter(item => item.category === category);

    productsGrid.innerHTML = filtered.map(product => `
        <article class="product-card">
            <div class="product-img-box">
                <span class="category-tag">${product.categoryLabel}</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-bottom">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${product.id})">أضف للحقيبة</button>
                </div>
            </div>
        </article>
    `).join("");
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
    });
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`تمت إضافة "${product.name}" إلى حقيبة اللعب`);
}

function updateQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
}

function removeItem(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    cartCountEl.textContent = totalCount;
    cartTotalEl.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p class="empty-msg">حقيبة اللعب فارغة حالياً.</p>`;
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span>$${(item.price * item.qty).toFixed(2)}</span>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeItem(${item.id})">حذف</button>
                </div>
            </div>
        </div>
    `).join("");
}

function openCart() {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
}

function closeCart() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
}

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("حقيبة اللعب فارغة!");
        return;
    }
    showToast("شكراً لاختياركم نيكسورا كيدز!");
    cart = [];
    updateCartUI();
    closeCart();
});

function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    setTimeout(() => {
        toastEl.classList.remove("show");
    }, 2500);
}

renderProducts();
updateCartUI();