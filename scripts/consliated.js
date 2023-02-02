// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link
//       rel="stylesheet"
//       href="node_modules/bootstrap/dist/css/bootstrap.min.css"
//     />
//     <link
//       href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
//       rel="stylesheet"
//     />
//   </head>
//   <body>
//     <div>
//       <nav class="navbar navbar-expand-lg bg-light navbar-light">
//         <div class="container">
//           <a class="navbar-brand" href="#">Ecommerce</a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link position-relative" href="/wishlist.html"
//                   >Wishlist
//                   <span
//                     id="wishlistCount"
//                     class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                   >
//                     0
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//     <div class="container">
//       <div class="row">
//         <div class="col-12">
//           <div class="input-group my-3">
//             <input
//               type="Search"
//               id="search"
//               class="form-control"
//               placeholder="Enter Product Name"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//             <span class="input-group-text" id="basic-addon2">
//               <span class="material-icons-outlined"> search </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="container">
//       <div class="row" id="products"></div>
//     </div>
//     <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
//     <script src="./index.js"></script>
//     <script src="./scripts/btn.js"></script>
//     <script src="./scripts/search.js"></script>
//     <script src="./scripts/render.js"></script>
//   </body>
// </html>
function captureFavorateButtonClick(){
    //const products$=document.getElementById('products')
    const favorateButtons=productsElement.querySelectorAll('.btn-favorate');
    favorateButtons.forEach(function(eachButton){
      eachButton.addEventListener("click",function(event){
            //console.log("hello world")
            //alert("ok")
            const SelectedButtonId=event.target.closest(".btn-favorate");
            const ClickedFavourateButtonId=SelectedButtonId.getAttribute("data-id");

            //console.log(ClickedFavourateButtonId)
            const iconElementsText=eachButton.querySelector('.material-icons-outlined');

            const favorateButtonIndex = selectFavorateButtonIds.indexOf(ClickedFavourateButtonId);

            if (favorateButtonIndex!=-1){
              selectFavorateButtonIds.splice(favorateButtonIndex,1);
              iconElementsText.innerText='favorite_border'
            }else{
              selectFavorateButtonIds.push(ClickedFavourateButtonId);
              iconElementsText.innerText='favorite'
            }
            wishlistCount$.innerText=selectFavorateButtonIds.length;

        })
    })
  }
  const selectFavorateButtonIds=[];

  const wishlistCount$ = document.getElementById("wishlistCount")
  

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
  const search$=document.getElementById("search");
search$.addEventListener('keyup',function(event){
   const searchedValue=search$.value.toLowerCase();
   console.log(searchedValue)

  const modifiedProductsList=productsModified.filter(function(product){
      const updatedProductName=product.title.toLowerCase();
      return updatedProductName.includes(searchedValue)===true;
  })

  renderProductCards(modifiedProductsList);
})