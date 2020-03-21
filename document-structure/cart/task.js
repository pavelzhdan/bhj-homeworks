let quantityControls = document.querySelectorAll("div.product__quantity-control");

for(const quantityControl of quantityControls){
    quantityControl.addEventListener("click", (event) =>{
        let button = event.target;
        let buttonParent = button.closest(".product__quantity-controls");
        let productQuantityElement = buttonParent.querySelector("div.product__quantity-value");
        let productQuantity = Number(productQuantityElement.innerText);
        console.log(productQuantity);
        console.log(button.classList.contains("product__quantity-control_inc"));
        if(button.classList.contains("product__quantity-control_inc")){
            productQuantityElement.innerText = productQuantity+1;
        } else {
            productQuantityElement.innerText = productQuantity-1;
            if(productQuantityElement.innerText == 0){
                productQuantityElement.innerText = 1;
            };
        };
    });
};

let addCartButtons = document.querySelectorAll("div.product__add");

for(const addCartButton of addCartButtons){
    addCartButton.addEventListener("click", (event) => {
        let addProduct = event.target.closest("div.product");
        addProductID = addProduct.dataset.id;
        let imageSource = addProduct.querySelector("img.product__image");
        let imageSourcetext = imageSource.getAttribute("src");
        let quantity = Number(addProduct.querySelector("div.product__quantity-value").innerText);
        let cart = document.querySelector("div.cart__products");
        let cartContains = cart.querySelector(`div[data-id="${addProductID}"]`);
        console.log(cartContains);
        if(!cartContains){
            cart.insertAdjacentHTML("beforeend", 
            `<div class="cart__product" data-id=${addProductID}>
            <img class="cart__product-image" src=${String(imageSourcetext)}>
            <div class="cart__product-count">${quantity}</div>
            </div>`);} else {
            let inCartQuantity =  cartContains.querySelector("div.cart__product-count");
            inCartQuantity.innerText = Number(inCartQuantity.innerText) + Number(quantity);
        };
    })
};

