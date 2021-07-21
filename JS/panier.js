
// Récupération des données dans le LocalStorage et traduction de l'objet JSON 

const cartContent = JSON.parse(localStorage.getItem("cart"));

// Initialisation des variables 

let totalPrice = 0;
const itemsId = [];

// Création d'une boucle et de blocs dans le tableau pour contenir les éléments

for (const teddy of cartContent) {
    totalPrice += teddy.price;
    itemsId.push(teddy.id);
    const newArticle = document.createElement("tr");
    newArticle.classList.add("newArticle");
    const newName = document.createElement("td");
    newName.classList.add("newName");
    newName.innerHTML = teddy.name;
    const newColor = document.createElement("td");
    newColor.classList.add("newColor");
    newColor.innerHTML = teddy.color;
    const newPrice = document.createElement("td");
    newPrice.classList.add("newPrice");
    newPrice.innerHTML = teddy.price / 100 + " €";
    listOfArticles.appendChild(newArticle);
    newArticle.appendChild(newName);
    newArticle.appendChild(newColor);
    newArticle.appendChild(newPrice);
}

document.getElementById("basketTotalAmount").innerHTML = totalPrice / 100 + " €";

// Validation du formulaire 

document.getElementById("validationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var erreur;
    var name = document.getElementById("formName");
    var firstName = document.getElementById("formFirstName");
    var address = document.getElementById("formAddress");
    var city = document.getElementById("formCity");
    var email = document.getElementById("formEmail");

    if (!name.value || !validName(name.value)) {
        erreur = "Veuillez renseigner votre nom.";
    }
    if (!firstName.value || !validFirstName(firstName.value)) {
        erreur = "Veuillez renseigner votre prénom.";
    }
    if (!address.value || !validAddress(address.value)) {
        erreur = "Veuillez renseigner votre adresse.";
    }
    if (!city.value || !validCity(city.value)) {
        erreur = "Veuillez renseigner votre ville.";
    }
    if (!email.value || !validEmail(email.value)) {
        erreur = "Veuillez renseigner votre email.";
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("formErreur").innerHTML = erreur;
        return false

    } else {
        const clientData = {
            contact: {
                firstName: firstName.value,
                lastName: name.value,
                address: address.value,
                city: city.value,
                email: email.value
            },
            products: itemsId
        }

// Ajout des informations de contact à l'URL, nettoyage du Local Storage et ouverture de la page de confirmation

        fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clientData)
        }).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    localStorage.clear();
                    window.location.href = "confirmation.html?orderId=" + data.orderId + "&firstName=" + data.contact.firstName + "&totalPrice=" + totalPrice;
                });
            }
        });
    }
})

function addToLocalStorage(contact, clientData) {
    contact.push(clientData);
    const clientDataString = JSON.stringify(contact);
    localStorage.setItem("clientContact", clientDataString);
}

// Validation supplémentaire des données du formulaire avec RegEx

function validName(name) {
    const nameRegEx = /^[^0-9]+[a-zA-Z]+$/;
    return nameRegEx.test(name);
}
function validFirstName(firstName) {
    const firstNameRegEx = /^[^0-9]+[a-zA-Z]+$/;
    return firstNameRegEx.test(firstName);
}
function validAddress(address) {
    const addressRegEx = /^[0-9]+[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
    return addressRegEx.test(address);
}
function validCity(city) {
    const cityRegEx = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
    return cityRegEx.test(city);
}
function validEmail(email) {
    const emailRegEx = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    return emailRegEx.test(email);
}

