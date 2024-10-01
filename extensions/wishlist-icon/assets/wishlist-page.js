document.addEventListener("DOMContentLoaded", function () {
  // Inject CSS styles dynamically
  var style = document.createElement("style");
  style.innerHTML = `
    .product-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
     
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 10px;
    }
    .wishlist-product {
      width: 23%; /* Four items per row on desktop */
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      background-color: #fff;
      transition: box-shadow 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
    }
    .wishlist-product:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .product-link {
      text-decoration: none;
      color: inherit;
    }
    .product-img {
      width: 100%;
      height: auto;
      display: block;
    }
    .card-body {
      padding: 15px;
    }
    .card-title {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    .product-price {
      font-size: 1.5rem;
      color: #333;
      font-weight: bold;
    }
    .remove-btn-container {
      text-align: center;
      padding: 10px;
    }
    .remove-btn {
      width:100%;
      background: white;
      border: 1px solid;
      color: #dc3545;
      font-size: 1.5rem;
      cursor: pointer;
      padding:12px;

    }
    .remove-btn i {
      margin-right: 5px;
    }
    @media (max-width: 1024px) {
      .wishlist-product {
        width: 48%; /* Two items per row on tablets */
      }
    }
    @media (max-width: 576px) {
      .wishlist-product {
        width: 100%; /* Single column on mobile */
      }
      .product-container {
        flex-direction: column;
      }
    }
  `;
  document.head.appendChild(style);

  // Get wishlist from localStorage
  var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length > 0) {
    wishlist.forEach(function (product) {
      // Create HTML for each product in the wishlist
      var productHtml = `
        <div class="card wishlist-product" id="product-${product.id}">
          <a href="/products/${product.handle}" class="product-link">
            <img src="${product.featured_image}" alt="${product.title}" class="product-img">
            <div class="card-body">
              <h3 class="card-title">${product.title}</h3>
              <p class="product-price">Price: ${product.price}</p>
            </div>
          </a>
          <div class="remove-btn-container">
            <button class="remove-btn" data-id="${product.id}">
              <i class="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>
      `;
      // Append the product HTML to the wishlist-products div
      document.getElementById("wishlist-products").innerHTML += productHtml;
    });

    // Add event listener for remove buttons
    document.querySelectorAll(".remove-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        var productId = this.getAttribute("data-id");

        // Remove product from wishlist in localStorage
        wishlist = wishlist.filter(function (item) {
          return item.id != productId;
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        // Remove the product from the page
        var productDiv = document.getElementById(`product-${productId}`);
        productDiv.remove();

        // Check if wishlist is empty after removal
        if (wishlist.length === 0) {
          document.getElementById("wishlist-products").innerHTML = '<p>Your wishlist is empty.</p>';
        }
      });
    });
  } else {
    // If no products in wishlist
    document.getElementById("wishlist-products").innerHTML = "<p>Your wishlist is empty.</p>";
  }
});
