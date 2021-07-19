const container = document.getElementById("teddies");

// Récupération des données de l'api puis incrustation dynamique dans l'HTML 

fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if (res.ok) {
            res.json().then(teddies => {
                console.log(teddies)

                for (const teddy of teddies) {
                    const link = document.createElement("a");
                    link.href = "produit.html?id=" + teddy._id;
                    link.classList.add("teddy");
                    const img = document.createElement("img");
                    img.classList.add("teddyImage");
                    img.src = teddy.imageUrl;
                    img.alt = "image de " + teddy.name;
                    const h2 = document.createElement("h2");
                    h2.innerHTML = teddy.name;
                    const h3 = document.createElement("h3");
                    h3.innerHTML = teddy.price / 100 + " €";
                    container.appendChild(link);
                    link.appendChild(img);
                    link.appendChild(h2);
                    link.appendChild(h3);
                }
            })
        }
    })

