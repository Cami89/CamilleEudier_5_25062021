
const cartContent = JSON.parse(localStorage.getItem("cart"));

for (const teddy of cartContent) {
// je crée mes lignes de tableau ici
    const newArticle = document.createElement("tr"); // créa d'un élément tr
    newArticle.classList.add("newArticle"); // attribution de la class newArticle

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
console.log(teddy) // pour voir si je récupère bien mes petits ours tout mignon
}
            


/*Validation du formulaire et ouverture de la page confirmation*/

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
        window.location.href = "confirmation.html";
    }
})

/*Ajout des infos formulaire au local storage*/

