const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
    function register(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(1000px)";

    }

    function login(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }

/*-----login-page-firebase----*/




/*-------Shopping cart----*/
let carts = document.querySelectorAll('.add-cart');
let products = [
  {
     name: 'Blush',
     tag: 'narsblush',
     price: 32, 
     inCart: 0
  },
  {
    name: 'Chloé Eau de Parfum',
    tag: 'chloeparfum',
    price: 132,
    inCart: 0
  },
  {
    name: 'The Rice Wash Skin-Softening Cleanser',
    tag: 'ricecleaner',
    price: 36,
    inCart: 0
  },
  {
    name: 'The Double Shot Blow-Dryer Brush',
    tag: 'doublebrush',
    price: 155,
    inCart: 0
  },
  {
    name: 'COCO MADEMOISELLE Eau de Parfum',
    tag: 'cocoparfum',
    price: 116,
    inCart: 0
  },
  {
    name: 'Niacinamide 10% + Zinc 1% Oil Control Serum',
    tag: 'niacinamideserum',
    price: 7,
    inCart: 0
  },
  {
    name: 'The Silk Sunscreen Mineral Broad Spectrum SPF 50 PA++++ with Hyaluronic Acid and Niacinamide',
    tag: 'silksunscreen',
    price: 60,
    inCart: 0
  },
  {
    name: 'Instant Detox Mask',
    tag: 'detoxmask',
    price: 39,
    inCart: 0
  },
  {
    name: 'Beauty Elixir Face Mist',
    tag: 'facemist',
    price: 49,
    inCart: 0
  },
  {
    name: 'Vinopure Natural Salicylic Acid Pore Minimizing Serum',
    tag: 'vinopureserum',
    price: 49,
    inCart: 0
  },
  {
    name: 'Niacinamide 10% + Zinc 1% Oil Control Serum',
    tag: 'niacinamideserum',
    price: 7,
    inCart: 0
  },
  {
    name: 'ORIGINAL BEAUTYBLENDER Makeup Sponge',
    tag: 'originalsponge',
    price: 20,
    inCart: 0
  },
  {
    name: 'Liquid Touch Foundation Brush',
    tag: 'liquidbrush',
    price: 28,
    inCart: 0
  },
  {
    name: 'Premier Cru Anti-Aging Serum',
    tag: 'premierserum',
    price: 129,
    inCart: 0
  },
  {
    name: 'AHA 30% + BHA 2% Exfoliating Peeling Solution',
    tag: 'ahapeeling',
    price: 8,
    inCart: 0
  },
  {
    name: 'Indigo Overnight Repair Serum in Cream Treatment',
    tag: 'indigotreatment',
    price: 88,
    inCart: 0
  },
  {
    name: 'High Tops Self-Grip Rollers',
    tag: 'topsrollers',
    price: 12,
    inCart: 0
  },
  {
    name: 'Radiant Creamy Concealer',
    tag: 'radiantconcealer',
    price: 31,
    inCart: 0
  },
  {
    name: 'All Nighter Long-Lasting Makeup Setting Spray',
    tag: 'nighterspay',
    price: 33,
    incart: 0
  },
  {
    name: 'Always an Optimist Soft Radiance Setting Powder',
    tag: 'softpowder',
    price: 22,
    inCart: 0
  },
  {
    name: 'LUNA™  3 for Sensitive Skin',
    tag: 'lumadevice',
    price: 119,
    inCart: 0
  },
  {
    name: 'Squalane + Marine Algae Eye Cream',
    tag: 'squalanecream',
    price: 54,
    inCart: 0
  },
  {
    name: 'Almost Lipstick',
    tag: 'almostlipstick',
    price: 20,
    inCart: 0
  },
  {
    name: 'Miss Dior Eau de Parfum',
    tag: 'missparfum',
    price: 142,
    inCart: 0
  },
  {
    name: 'Black Opium Eau de Parfum',
    tag: 'blackparfum',
    price: 130,
    inCart: 0
  },
  {
    name: 'Beauty Bento Bouncy Eyeshadow Trio',
    tag: 'beautyeyeshadow',
    price: 26,
    inCart: 0
  },
  {
    name: 'Eyelash Curler',
    tag: 'eyelashcurler',
    price: 23,
    inCart: 0
  }
];
for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
      
    
  })

}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;

  }

}
function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if( action ) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
      console.log("action running");
  } else if( productNumbers ) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  // let productNumbers = localStorage.getItem('cartNumbers');
  // productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
          cartItems = {
              ...cartItems,
              [currentProduct]: product
          }
      } 
      cartItems[currentProduct].inCart += 1;

  } else {
      product.inCart = 1;
      cartItems = { 
          [product.tag]: product
      };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
  let cart = localStorage.getItem("totalCost");

  if( action) {
      cart = parseInt(cart);

      localStorage.setItem("totalCost", cart - product.price);
  } else if(cart != null) {
      
      cart = parseInt(cart);
      localStorage.setItem("totalCost", cart + product.price);
  
  } else {
      localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector
  (".products");
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);

 
  if( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
      <div class ="product"> 
         <img src="./image-website/${item.tag}.png" width="50px">
         <span>${item.name}</span>  
      </div>
      <div class="price">$${item.price},00</div>
      <div class="quantity">
         
         <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
         <span>${item.inCart}</span>
         <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
  
         <button class ="btn-danger" type ="button">REMOVE</button>  
        
      </div>
      <div class="total">
         $${item.inCart * item.price},00
      </div>`;
    });
    productContainer.innerHTML += `
       <div class ="basketTotalContainer">
           <h4 class="basketTotalTitle">Basket Total</h4>
           <h4 class="basketTotal">$${cartCost},00
           </h4>
       </div>`
    deleteButtons();
    
        
   
    
  
  }
}
function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.btn-danger');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);
  
  for(let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
        productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
        localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
        localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));
        delete cartItems[productName];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
        onLoadCartNumbers();
        
    })
  }
}


onLoadCartNumbers();
displayCart();