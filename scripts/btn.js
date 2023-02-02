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