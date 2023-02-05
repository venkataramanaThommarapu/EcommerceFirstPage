const selectFavorateButtonIds=[];
  

  const productsElement = document.getElementById("products")
  
  const productsModified = products.map(function (product) {
    product.priceModified = product.price.toFixed(2)
    return product
  })
  renderProductCards(productsModified)
  
  function renderProductCards(products) {
    let productCards = ""
  
    for (let i = 0; i < products.length; i++) {
      productCards = productCards + renderProductCard(products[i])
    }
    productsElement.innerHTML = productCards;

    captureFavorateButtonClick();
  }
  
  function renderProductCard(product) {
    return `<div class="col-12 col-md-4 col-lg-3">
      <div class="card">
        <img
          src="${product.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
           ${product.description}
          </p>
          <div>
          <strong><span class="material-icons-outlined">
          currency_rupee
          </span>${product.priceModified}</strong>
          </div>
          <div
            class="btn-group w-100"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn">
              <span class="material-icons-outlined">
                shopping_cart_checkout
              </span>
            </button>
            <button type="button" class="btn btn-favorate" data-id="${product.id}">
              <span class="material-icons-outlined"> favorite_border </span>
            </button>
            <button type="button" class="btn">
              <span class="material-icons-outlined"> compare_arrows </span>
            </button>
          </div>
        </div>
      </div>
      </div>`
  }