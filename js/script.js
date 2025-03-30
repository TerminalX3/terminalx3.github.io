// Product Database
const productsDB = {
  jharoka: {
    id: 'jharoka',
    name: 'Jharoka',
    image: 'images/Jharoka.png',
    description: 'Experience the awe-inspiring beauty of this majestic masterpiece, meticulously adorned with captivating Lippan art and mirror work.',
    extendedDescription: 'This stunning Jharoka piece represents the pinnacle of traditional craftsmanship merged with contemporary aesthetics. Each intricate detail is carefully handcrafted using authentic Lippan art techniques, while the strategic placement of mirrors creates a mesmerizing play of light that brings the piece to life. The frame itself is a testament to artistic excellence, providing the perfect backdrop for this cultural masterpiece.',
    size: '50" high x 70" wide (with frame)',
    price: 9999,
    inStock: true
  },
  rangeela: {
    id: 'rangeela',
    name: 'Rangeela',
    image: 'images/Rangeela.png',
    description: 'A vibrant masterpiece adorned with intricate Lippan art and dazzling mirror work, capturing the essence of tradition and modernity in a single glance.',
    extendedDescription: 'Rangeela is a celebration of color and creativity, where traditional Lippan art meets contemporary design sensibilities. This circular masterpiece features an intricate pattern that draws the eye inward, with carefully placed mirrors that create a dynamic interplay of light and shadow. Perfect as a statement piece, it brings both cultural richness and artistic sophistication to any space.',
    size: '36" diameter',
    price: 1999,
    inStock: true
  },
  mandala: {
    id: 'mandala',
    name: 'Mandala',
    image: 'images/Mandala.png',
    description: 'A striking art wall piece, blending the timeless elegance of Lippan art and the shimmering allure of mirror work against a captivating black backdrop.',
    extendedDescription: 'This mesmerizing Mandala piece combines the sacred geometry of traditional patterns with contemporary artistic expression. The contrast of the black backdrop with the intricate white Lippan work creates a dramatic visual impact, while strategically placed mirrors add depth and luminosity to the design.',
    size: '30" x 24"',
    price: 899,
    inStock: true
  },
  dreamscape: {
    id: 'dreamscape',
    name: 'Dreamscape',
    image: 'images/Dreamscape.png',
    description: 'An enchanting fusion of contemporary flair and ethereal beauty, showcasing Lippan art and mirror work adorned with delicate butterflies and flowers on a dreamy canvas.',
    extendedDescription: 'Dreamscape is where imagination meets artistry. This ethereal piece features delicate butterflies and flowers rendered in traditional Lippan art, creating a dreamy atmosphere that transforms any space into a magical sanctuary. The mirror work catches and reflects light, adding a dynamic element that changes throughout the day.',
    size: '29" x 30"',
    price: 2499,
    inStock: true
  },
  haveli: {
    id: 'haveli',
    name: 'Haveli',
    image: 'images/Haveli.png',
    description: 'Embracing heritage with grace, a traditional Lippan art and mirror work wall piece on a pristine white canvas, featuring an inviting Aangan framed by intricate Jharokha design.',
    extendedDescription: 'Haveli is a tribute to traditional Indian architecture and artistry. This piece captures the essence of a traditional courtyard home, with its intricate Jharokha design and detailed Lippan work creating a sense of depth and perspective. The pristine white backdrop enhances the sculptural quality of the artwork.',
    size: '29" x 30"',
    price: 2999,
    inStock: true
  },
  rangrasiya: {
    id: 'rangrasiya',
    name: 'Rang Rasiya',
    image: 'images/Rangrasiya.png',
    description: 'Twirl through life in your exquisite and colorful outfit and paint the world with your vibrant spirit.',
    extendedDescription: 'Rang Rasiya celebrates the joy of movement and color. This dynamic piece captures the essence of dance and celebration through intricate Lippan work and carefully placed mirrors that create a sense of movement and energy. The vibrant design makes it a perfect centerpiece for any contemporary space.',
    size: '40" x 28"',
    price: 2999,
    inStock: true
  },
  symphony: {
    id: 'symphony',
    name: 'Symphony',
    image: 'images/Symphony.png',
    description: 'These four exquisite Lippan wall art pieces are a stunning showcase of traditional craftsmanship, each uniquely adorned with intricate designs and shimmering art mirrors.',
    extendedDescription: 'Symphony is a collection of four harmonious pieces that work together to create a stunning visual narrative. Each piece features unique Lippan art patterns and mirror work, designed to complement each other while maintaining individual character. Perfect for creating an artistic gallery wall or distributed throughout your space.',
    size: '13.5" x 3.5"',
    price: 5999,
    inStock: true
  },
  roshan: {
    id: 'roshan',
    name: 'Roshan',
    image: 'images/Roshan.png',
    description: 'A flower pot boasts a mesmerizing display of Lippan artistry, transforming it into a captivating centerpiece of vibrant beauty.',
    extendedDescription: 'Roshan combines functionality with artistic excellence. This decorative flower pot features intricate Lippan work that transforms a simple vessel into a work of art. The design incorporates traditional patterns with contemporary sensibilities, making it perfect for both modern and traditional settings.',
    size: '48" x 18"',
    price: 149,
    inStock: true
  },
  potterspride: {
    id: 'potterspride',
    name: "Potter's Pride",
    image: "images/Potter's Pride.png",
    description: 'Illuminate your space with elegance and charm using these stunning candle/planter holders adorned with Lippan art and mirror work.',
    extendedDescription: 'This pair of exquisite candle/planter holders showcases the versatility of Lippan art in contemporary design. Each piece is carefully crafted with intricate patterns and mirror work, creating beautiful light play when used with candles. Perfect as standalone decorative pieces or functional holders.',
    size: '13.5" x 3.5"',
    price: 499,
    inStock: true
  },
  kalash: {
    id: 'kalash',
    name: 'Kalash',
    image: 'images/featured_art_2.png',
    description: 'Stands as a symbol of divine elegance and timeless tradition!',
    extendedDescription: 'The Kalash piece embodies the sacred symbolism of Indian culture with contemporary artistic expression. The traditional form is enhanced with intricate Lippan work and carefully placed mirrors, creating a piece that is both spiritually significant and aesthetically striking.',
    size: 'Standard',
    price: 199,
    inStock: true
  },
  ganesha: {
    id: 'ganesha',
    name: 'Ganesha',
    image: 'images/Ganesha.png',
    description: 'A divine representation of Lord Ganesha crafted with devotion and artistic excellence.',
    extendedDescription: 'This Ganesha artwork combines spiritual significance with artistic mastery. The intricate Lippan work and mirror details bring the divine form to life, creating a piece that is both a spiritual focal point and a stunning work of art.',
    size: '48" x 18"',
    price: 3999,
    inStock: true
  },
  nameplate: {
    id: 'nameplate',
    name: 'Name Plate',
    image: 'images/Name_Plate.png',
    description: 'Personalize your space with an elegant name plate featuring exquisite Lippan art.',
    extendedDescription: 'Transform your entrance with this personalized name plate that combines traditional Lippan art with modern design. Each piece is carefully crafted to incorporate your name into the artistic design, creating a unique and welcoming statement piece.',
    size: '14" diameter',
    price: 299,
    inStock: true
  },
  paisely: {
    id: 'paisely',
    name: 'Paisely',
    image: 'images/Paisely.png',
    description: 'A sophisticated interpretation of the classic paisley pattern in Lippan art.',
    extendedDescription: 'This elegant piece reimagines the timeless paisley pattern through the medium of Lippan art. The intricate details and mirror work create a dynamic interplay of light and shadow, while the pattern itself speaks to both traditional and contemporary design sensibilities.',
    size: '40" x 28"',
    price: 2499,
    inStock: true
  }
};

// Modal functionality
function createModal() {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-grid">
        <div class="modal-image">
          <img src="" alt="Product Image">
        </div>
        <div class="modal-details">
          <h2></h2>
          <p class="extended-description"></p>
          <p class="size"><b>Size:</b></p>
          <p class="price"><b>Price:</b></p>
          <span class="stock"></span>
          <button class="btn add-to-cart" data-product-id="">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Close modal when clicking the X or outside the modal
  const closeBtn = modal.querySelector('.close-modal');
  const modalContent = modal.querySelector('.modal-content');
  
  function closeModal() {
    modal.classList.remove('show');
    modalContent.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Match transition duration
  }
  
  closeBtn.onclick = closeModal;
  window.onclick = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };
  
  return modal;
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = createModal();
  const modalContent = modal.querySelector('.modal-content');
  
  // Add click handlers to products
  document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function(e) {
      if (!e.target.classList.contains('add-to-cart')) {
        const productId = this.dataset.productId;
        const productData = productsDB[productId];
        
        if (productData) {
          const modalImg = modal.querySelector('.modal-image img');
          modalImg.src = productData.image;
          modalImg.alt = productData.name;
          
          modal.querySelector('.modal-details h2').textContent = productData.name;
          modal.querySelector('.extended-description').textContent = productData.extendedDescription;
          modal.querySelector('.size').textContent = `Size: ${productData.size}`;
          modal.querySelector('.price').textContent = `$${productData.price}`;
          modal.querySelector('.stock').textContent = productData.inStock ? 'In Stock' : 'Out of Stock';
          modal.querySelector('.stock').className = `stock ${productData.inStock ? 'in-stock' : 'out-of-stock'}`;
          
          // Set the product ID on the modal's Add to Cart button
          modal.querySelector('.add-to-cart').dataset.productId = productId;
          
          modal.style.display = 'block';
          // Trigger animations
          requestAnimationFrame(() => {
            modal.classList.add('show');
            modalContent.classList.add('show');
          });
        }
      }
    });
  });

  // Add click handler for modal's Add to Cart button
  modal.querySelector('.add-to-cart').addEventListener('click', function(e) {
    e.stopPropagation();
    const productId = this.dataset.productId;
    if (productId && window.cart) {
      window.cart.addItem(productId);
      
      // Close the modal after adding to cart
      modal.classList.remove('show');
      modalContent.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });
});

// Cart functionality
class Cart {
  constructor() {
    this.items = {};
    this.loadFromLocalStorage();
    this.initializeCartUI();
  }

  loadFromLocalStorage() {
    const savedCart = localStorage.getItem('artesiaCart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateCartCount();
      this.updateCartUI();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('artesiaCart', JSON.stringify(this.items));
  }

  addItem(productId) {
    if (!this.items[productId]) {
      this.items[productId] = {
        quantity: 0,
        ...productsDB[productId]
      };
    }
    this.items[productId].quantity += 1;
    this.saveToLocalStorage();
    this.updateCartUI();
    this.showAddedToCartFeedback();
  }

  removeItem(productId) {
    delete this.items[productId];
    this.saveToLocalStorage();
    this.updateCartUI();
  }

  updateQuantity(productId, delta) {
    const item = this.items[productId];
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveToLocalStorage();
        this.updateCartUI();
      }
    }
  }

  getTotal() {
    return Object.values(this.items).reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  updateCartCount() {
    const count = Object.values(this.items).reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
  }

  showAddedToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = 'Added to cart!';
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
          feedback.remove();
        }, 300);
      }, 2000);
    }, 100);
  }

  updateCartUI() {
    this.updateCartCount();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    
    Object.entries(this.items).forEach(([productId, item]) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" data-product-id="${productId}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-product-id="${productId}">+</button>
          </div>
        </div>
        <button class="remove-item" data-product-id="${productId}">&times;</button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
    
    cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
  }

  initializeCartUI() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'block';
      setTimeout(() => cartModal.classList.add('show'), 10);
    });

    closeCart.addEventListener('click', () => {
      cartModal.classList.remove('show');
      setTimeout(() => cartModal.style.display = 'none', 300);
    });

    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.remove('show');
        setTimeout(() => cartModal.style.display = 'none', 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        e.stopPropagation();
        const productId = e.target.closest('.product')?.dataset.productId;
        if (productId) {
          this.addItem(productId);
        }
      }
      
      if (e.target.classList.contains('quantity-btn')) {
        const productId = e.target.dataset.productId;
        const delta = e.target.classList.contains('plus') ? 1 : -1;
        this.updateQuantity(productId, delta);
      }
      
      if (e.target.classList.contains('remove-item')) {
        const productId = e.target.dataset.productId;
        this.removeItem(productId);
      }
    });

    checkoutBtn.addEventListener('click', () => {
      if (Object.keys(this.items).length === 0) {
        alert('Your cart is empty!');
        return;
      }
      // Here you would typically redirect to a checkout page
      // For now, we'll just show an alert
      alert('Proceeding to checkout... (This is a placeholder)');
    });
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.cart = new Cart();
});

// Remove the old add to cart alert
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    const oldClickListeners = button.getEventListeners?.('click') || [];
    oldClickListeners.forEach(listener => {
      button.removeEventListener('click', listener.listener);
    });
  });
});

// Add cart feedback styles
const style = document.createElement('style');
style.textContent = `
  .cart-feedback {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #C4A484;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .cart-feedback.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Email functionality
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return; // Only run on contact page

  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  
  function showMessage(element, duration = 5000) {
    element.style.display = 'block';
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitButton = document.getElementById('send-message');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email body in the desired format
    const emailBody = `
      Name: ${name}
      Email: ${email}

      Dear Artesia Designs,
      ${message}

      Thank you,
      ${name}
    `;

    const templateParams = {
      to_email: 'kotasumedh@gmail.com', // Email recipient
      from_name: name, // Sender's name
      from_email: email, // Sender's email
      message: emailBody // Formatted message content
    };

    emailjs.send(
      'service_s571exl', // Replace with your EmailJS service ID
      'template_1tcjrli', // Replace with your EmailJS template ID
      templateParams
    )
    .then(function() {
      showMessage(successMessage);
      contactForm.reset();
    })
    .catch(function(error) {
      console.error('Failed to send email:', error);
      showMessage(errorMessage);
    })
    .finally(function() {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    });
  });
});

// Add styles for success/error messages
const emailStyles = document.createElement('style');
emailStyles.textContent = `
  .message {
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    text-align: center;
  }

  .success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;
document.head.appendChild(emailStyles);

document.addEventListener('DOMContentLoaded', function() {
  // Check if the current page is the shop page
  if (window.location.pathname.includes('shop.html')) {
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
      cartContainer.classList.add('show'); // Add the class to trigger the animation
    }
  }
});
