const search$=document.getElementById("search");
  search$.addEventListener('keyup',function(event){
     const searchedValue=search$.value.toLowerCase();
     //console.log(searchedValue)

    const modifiedProductsList=productsModified.filter(function(product){
        const updatedProductName=product.title.toLowerCase();
        return updatedProductName.includes(searchedValue)===true;
    })

    renderProductCards(modifiedProductsList);
  })
