const confirmationInfo = JSON.parse(localStorage.getItem("clientContact"));

const clientName = document.getElementById("clientName");
clientName.innerHTML = teddy.firstName;

const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML = "?? Numéro ??" ;

const orderTotal = document.getElementById("orderTotal")
orderTotal.innerHTML = teddy.totalToPay;