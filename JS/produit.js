function getUrlParameter(name) {
    // va récupérer paramètres de l'url
    const parameters = new URLSearchParams(window.location.search); 
    // récupère le nom du paramètre
    return parameters.get(name);
}

const id = getUrlParameter("id");
// récupère éléments html
const teddyName = document.getElementById("name");
const description = document.getElementById("description");
const price = document.getElementById("price");
const teddyImage = document.getElementById("teddyImage");
const colors = document.getElementById("colors");

// récupère les données du server pour un seul ours/id
fetch("http://localhost:3000/api/teddies/" + id)
    .then(res => {
        if (res.ok) {
            res.json().then(teddy => {

                teddyName.innerHTML = teddy.name; 
                description.innerHTML = teddy.description;
                price.innerHTML = teddy.price / 100 + " €";
                teddyImage.src = teddy.imageUrl;
                // boucle pour créer les options de couleurs
                for (const color of teddy.colors) {
                    const option = document.createElement("option");
                    option.value = color;
                    option.innerHTML = color;
                    colors.appendChild(option);
                }
                const addToBasket = document.getElementById('addToBasket');
                addToBasket.addEventListener('click', function() {          
                    const commande = {
                        id: teddy._id, 
                        name: teddy.name,
                        price: teddy.price,
                        color: colors.value
                    }    
                              
                    let cart = localStorage.getItem("cart");
                    if (cart) {
                        const order = JSON.parse(cart);
                        addToLocalStorage(order, commande);                       
                    } else {
                        const order = [];
                        addToLocalStorage(order, commande);
                    }
                });          
            })
        }
    })

function addToLocalStorage(order, commande) {
    order.push(commande);
    const commandeString = JSON.stringify(order);
    localStorage.setItem("cart" , commandeString);
    alert("Article ajouté au panier !")
}

