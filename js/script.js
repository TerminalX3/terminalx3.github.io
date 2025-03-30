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
          <button class="btn add-to-cart">Add to Cart</button>
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
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Added to Cart! (This is a placeholder alert)');
        // In a real application, you would handle cart logic here.
      });
    });
  });

// Email sending functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Send email via fetch
        fetch('http://localhost:3000', { // Update this line
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        })

        .then(response => {
            if (response.ok) {
                alert('Email sent successfully!');
                contactForm.reset(); // Reset the form after successful submission
            } else {
                alert('Error sending email.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

