let results = document.getElementById("shop-results");
let groceries = [];
let cart = [];
let cartButton = document.getElementById("superCart");
let cartList = document.getElementById("shop-search-cart")
cartButton.addEventListener("click", ()=>{
    cartList.innerHTML=""
    for(let i=0; i<cart.length; i++){
        console.log(cart[i][0])
        let li = document.createElement("LI");
        li.innerHTML=`${cart[i][0]}`;
        cartList.appendChild(li);
    }
    let checkout = document.createElement("SPAN")
    checkout.innerHTML="CHECKOUT";
    checkout.addEventListener("click", ()=>{
        cart=[]
        cartList.innerHTML = "";
        alert("YOUR ORDER HAS BEEN PLACED")
    })
    cartList.appendChild(checkout)
})

firebase.initializeApp(config);

function renderGroceries(obj, keys){
    console.log("KEYS: ", keys)
    for (key in obj) {
        if(keys.includes(key)){
            let div = document.createElement("div");
            let title = document.createTextNode(key+" ");
            let price = document.createTextNode((obj)[key]["price"]);
            div.appendChild(title);
            div.appendChild(price);
            
            let nameDiv = document.createElement("div");
            let nameP = document.createElement("p");
            nameP.appendChild(title)
            let priceP = document.createElement("p")
            priceP.appendChild(price)
            priceP.classList.add("price")
            let empty = document.createElement("p")
            nameDiv.appendChild(nameP);
            nameDiv.appendChild(empty);
            nameDiv.appendChild(priceP);

            let pic = document.createElement("IMG");
            pic.src=obj[key]["img"]
            pic.classList.add("food-image")

            let button = document.createElement("DIV");
            button.classList.add("addButton")
            button.classList.add("addOnly")
            button.innerHTML = "Add to Cart";
            button.id = title.nodeValue;
            button.addEventListener("click",()=>{
                cart.push([button.id, price.nodeValue])
                cartButton.innerHTML=(`Cart (${cart.length})`)
                console.log(cart);
            })
            nameDiv.classList.add("shop-results-item-name")
            
            let combineDiv = document.createElement("DIV");
            combineDiv.classList.add("shop-results-item")
            combineDiv.appendChild(pic)
            combineDiv.appendChild(nameDiv)
            combineDiv.appendChild(button)
            
            results.appendChild(combineDiv);
            
        }
    }
}

let foodRef = firebase.database().ref('Supermarkets/GoodNeighborSupermarket/foods')
console.log("FOODREF: ", foodRef)
foodRef.once('value', (snapshot)=>{
    groceries.push(snapshot.val())
})
.then(()=>{
    renderGroceries(groceries[0], Object.keys(groceries[0]))
})
.then(()=>{
    document.getElementById("shop-search-bar").addEventListener("input", (e)=>{
        results.innerHTML="";
        let filtered = Object.keys(groceries[0]).filter((key)=> key.includes(e.target.value))
        renderGroceries(groceries[0], filtered)
    })
})



