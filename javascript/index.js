"use strict";
/* "use strict" = en streng lærer
den siger med det samme til, hvis du laver en fejl */

console.log("hej");
/* console.log = skriv en besked i konsollen
bare for at tjekke, at filen virker */

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
/* productUrl = adressen, hvor dataen bor på internettet
det er ligesom en adresse på et hus, vi skal hen og hente noget fra */

const categoriesList = document.querySelector(".category_list_containers");
/* categoriesList = find kassen i HTML, hvor kortene skal stå 
. betyder "find den med denne class" */

getData();
/* getData() = sig "GO!" og start med at hente data
(man kan godt kalde den, før den er skrevet længere nede) */

function getData() {
  /* FUNCTION = en opskrift
den gør ingenting, før man kalder den med getData() */

  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
  /* fetch = gå hen til adressen og hent dataen
  .then = NÅR du er kommet tilbage, så gør det næste
  result.json() = pak dataen ud, så JavaScript kan forstå den
  showData(data) = giv den udpakkede data videre til showData */
}

function showData(data) {
  console.log("DATA", data);
  /* showData = opskriften, der viser dataen på siden
"data" = listen med sæsoner, vi lige har hentet */

  categoriesList.innerHTML = "";
  /* tøm kassen på siden, så der ikke ligger noget gammelt i den */

  let myInnerHTML = "";
  /* myInnerHTML = en tom pose, som vi fylder kort i
  let og ikke const, fordi posen bliver ændret hele tiden */

  data.forEach((category) => {
    console.log("category", category);
    /* FOREACH = laver et kort for hver kategori, et ad gangen
  "category" = den kategori, vi er ved lige nu */

    myInnerHTML += `<article class="category">
                <img />
                    <a href="produktliste.html">
                    <h3>${category.category}</h3>
                    </a>
               
            </article>
            
`;
  });
  /* += = læg et nyt kort oveni i posen
    `` (backticks) = så kan man skrive HTML over flere linjer
    ${season.season} = sæt sæsonens navn ind her, fx "Summer" */

  categoriesList.innerHTML = myInnerHTML;
  /* hæld hele posen med kort ind i kassen på siden, alt på én gang */
}
