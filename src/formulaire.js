// formulaire.js
export function addFormEventListener() {
    document.getElementById("formulaire").addEventListener("submit", function (event) {
      const remerciement = document.getElementById("remerciement");
      remerciement.style.opacity = "1";
      console.log(remerciement);
     
  const prenomInput = document.getElementById("prenom").value;
  console.log("Prénom :", prenomInput);
  prenomInput.value = "";
    });
  }
  