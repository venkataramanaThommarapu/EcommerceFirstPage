const products = [
  {
    id: 1,
    title: "Macbook",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
    description:
      "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
    price: 600,
  },
  {
    id: 2,
    title: "Iphone",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
    description:
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
    price: 123,
  },
  {
    id: 3,
    title: "Apple cinema",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
    description:
      "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
    price: 110,
  },
  {
    id: 4,
    title: "Epson",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
    price: 98,
  },
];

const selectFavorateButtonIds = [];

const productsElement = document.getElementById("products");

const productsModified = products.map(function (product) {
  product.priceModified = product.price.toFixed(2);
  return product;
});
renderProductCards(productsModified);



function renderProductCards(products) {
  let productCards = "";

  for (let i = 0; i < products.length; i++) {
    productCards = productCards + renderProductCard(products[i]);
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
      </div>`;
}

const search$ = document.getElementById("search");
search$.addEventListener("keyup", function (event) {
  const searchedValue = search$.value.toLowerCase();
  //console.log(searchedValue)

  const modifiedProductsList = productsModified.filter(function (product) {
    const updatedProductName = product.title.toLowerCase();
    return updatedProductName.includes(searchedValue) === true;
  });

  renderProductCards(modifiedProductsList);
});


function captureFavorateButtonClick() {
  //const products$=document.getElementById('products')
  const favorateButtons = productsElement.querySelectorAll(".btn-favorate");
  favorateButtons.forEach(function (eachButton) {
    eachButton.addEventListener("click", function (event) {
      const SelectedButtonId = event.target.closest(".btn-favorate");
      const ClickedFavourateButtonId = SelectedButtonId.getAttribute("data-id");

      //console.log(ClickedFavourateButtonId)
      const iconElementsText = eachButton.querySelector(
        ".material-icons-outlined"
      );

      const favorateButtonIndex = selectFavorateButtonIds.indexOf(
        ClickedFavourateButtonId
      );

      const wishlistCount$ = document.getElementById("wishlistCount");

      if (favorateButtonIndex != -1) {
        selectFavorateButtonIds.splice(favorateButtonIndex, 1);
        iconElementsText.innerText = "favorite_border";
      } else {
        selectFavorateButtonIds.push(ClickedFavourateButtonId);
        iconElementsText.innerText = "favorite";
      }
      wishlistCount$.innerText = selectFavorateButtonIds.length;
    });
  });
}
