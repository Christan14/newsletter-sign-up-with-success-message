console.log("conneté")

// Je selectionne et je stocke tous les éléments
const container_1 = document.querySelector(".container");
const inside_1 = document.querySelector(".inside");
const form = document.querySelector("form");
//const email = document.getElementById("email");

//const msgError = document.querySelector("error");



//Je détecte la validation du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("email envoyé");

    container_1.classList.add("hide");
    inside_1.classList.remove("hide");

    //Je récupère la valeur de l'input
    const emailValue = email.Value.trim();
    console.log(emailValue, "email");
});

form.addEventListener("submits", function (e) {
    e.preventDefault();
    console.log("email envoyé");

    container_1.classList.remove("hide");
    inside_1.classList.add("hide")

    //Je récupère la valeur de l'input
    const emailValue = email.Value.trim();
    console.log(emailValue, "email");
});
