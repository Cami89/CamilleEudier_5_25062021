
const cartContent = JSON.parse(localStorage.getItem("cart"));

for (const teddy of cartContent) {

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
    newPrice.innerHTML = teddy.price/100 + " €";

    /* const numberOfArticles = document.createElement("td");
    numberOfArticles.classList.add("numberOfArticles");
    numberOfArticles.innerHTML = cartContent.number;

    const newTotal = document.createElement("td");
    newTotal.classList.add("newTotal");
    newTotal.innerHTML = newPrice * numberOfArticles; */

    listOfArticles.appendChild(newArticle);
    newArticle.appendChild(newName);
    newArticle.appendChild(newColor);
    newArticle.appendChild(newPrice);
    /*newArticle.appendChild(numberOfArticles);
    newArticle.appendChild(newTotal)
*/

}

/* Total des articles 

const TotalToPay = document.getElementById("basketTotalAmount");
let sumPrice = 0;
let addPrice = 0;
addPrice = teddy.newTotal;
sumPrice =  teddy.newTotal.lenght + addPrice;
TotalToPay.innerHTML = sumPrice+" €"; */


////* Validation du formulaire et ouverture de la page confirmation *////

document.getElementById("validationForm").addEventListener("submit" , function(e){
    e.preventDefault();

    var erreur ;
    var name = document.getElementById("formName");
    var firstName = document.getElementById("formFirstName");
    var address = document.getElementById("formAddress");
    var city = document.getElementById("formCity");
    var email = document.getElementById("formEmail");

    if (!name.value) {
        erreur = "Veuillez renseigner votre nom.";
    }
    if (!firstName.value) {
        erreur = "Veuillez renseigner votre prénom.";
    }
    if (!address.value) {
        erreur = "Veuillez renseigner votre adresse.";
    }
    if (!city.value) {
        erreur = "Veuillez renseigner votre ville.";
    }
    if (!email.value) {
        erreur = "Veuillez renseigner votre email.";
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("formErreur").innerHTML = erreur;
        return false

    } else {        
        const clientData ={
            contact: {
                firstName: firstName.value,
                lastName: name.value,
                address: address.value,
                city: city.value,
                email: email.value 
            }
        }

        let clientContact = localStorage.setItem("clientContact" , clientData);
        if (clientContact) {
            const contact = JSON.parse(clientContact);
            addToLocalStorage(contact, clientData);
        }
        else {
            const contact = [];
            addToLocalStorage(contact, clientData);
        }
        
        //addToLocalStorage(totalToPay) ??// ajout du montant total à payer
        window.location.href = "confirmation.html"; // ouverture de la page confirmation.
       
        
    }
})

function addToLocalStorage(contact, clientData) {
    contact.push(clientData);
    const clientDataString = JSON.stringify(contact);
    localStorage.setItem("clientContact" , clientDataString);
}



