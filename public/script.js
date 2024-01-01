/* Etape 1:enlever du DOM la div ayant l'ID "main_divParent_portraitTitre" */

let main_divParent_portraitTitre=document.querySelector("#main_divParent_portraitTitre");
let main=document.querySelector("main")

/* Etape 2:ajouter un nouvel élement parent permettant d'avoir séparement le titre et la photo */

/* Etape 3: appliquer un media query */
if (window.matchMedia("(min-width:768px)").matches) {
    main_divParent_portraitTitre.style.display = "none";

    main.insertAdjacentHTML("afterbegin", "<h1>Fahami <br>MOHAMED ALI</h1> <img class='portrait' src='../asset/images/Portrait.jpg' alt='portrait du propriétaire du CV en ligne'>");
}
