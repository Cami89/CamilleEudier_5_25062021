const container = document.getElementById("teddies");
fetch("http://localhost:3000/api/teddies") // on va chercher les infos sur le serveur
    .then(res => { // quand on les a reçus créer la sonction réponse : "res"
        if (res.ok) { // si réponse ok alors...
            res.json().then(teddies => { // transformation en langage JSON puis créa de fonction "teddies"
                console.log(teddies) // (check à retirer)
                for (const teddy of teddies) { // créa d'une boucle pour ajouter tous les ours 
                    
                    const link = document.createElement("a"); // créa d'une constante link
                    link.href = "produit.html?id=" + teddy._id ; // source du lien / teddy._id pour tous les id suivants
                    link.classList.add("teddy"); // attribution de la class teddy à l'élément lien
                    const img = document.createElement("img"); // créa d'un élément image
                    img.classList.add("teddyImage"); 
                    img.src = teddy.imageUrl;
                    img.alt = "image de " + teddy.name;
                    const h2 = document.createElement("h2");
                    h2.innerHTML = teddy.name;
                    const h3 = document.createElement("h3");
                    h3.innerHTML = teddy.price/100 + " €";
                    container.appendChild(link);
                    link.appendChild(img);
                    link.appendChild(h2);
                    link.appendChild(h3);
                }
            })
        }
    })

