
function getUrlParameter(name) {
    // va récupérer paramètres de l'url
    const parameters = new URLSearchParams(window.location.search);
    // récupère le nom du paramètre
    return parameters.get(name);
}

const orderId = getUrlParameter("orderId");
const firstName = getUrlParameter("firstName");
const totalPrice = getUrlParameter("totalPrice");

const clientName = document.getElementById("clientName");
clientName.innerHTML = firstName;

const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML = orderId;

const orderTotal = document.getElementById("orderTotal")
orderTotal.innerHTML = totalPrice / 100 + " €";
