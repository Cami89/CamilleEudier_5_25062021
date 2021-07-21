
// Récupération des données de contact via l'URL

function getUrlParameter(name) {
    const parameters = new URLSearchParams(window.location.search);
    return parameters.get(name);
}

const orderId = getUrlParameter("orderId");
const firstName = getUrlParameter("firstName");
const totalPrice = getUrlParameter("totalPrice");

// Incrustation des données sur la page

const clientName = document.getElementById("clientName");
clientName.innerHTML = firstName;
const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML = orderId;
const orderTotal = document.getElementById("orderTotal");
orderTotal.innerHTML = totalPrice / 100 + " €";
