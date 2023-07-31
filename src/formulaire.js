// document.getElementById("emailForm").addEventListener("submit", function (event) {
//     event.preventDefault();
  
//     const prenom = document.getElementById("prenom").value;
//     const nom = document.getElementById("nom").value;
//     const userEmail = document.getElementById("email").value;
//     const sujet = document.getElementById("sujet").value;
//     const message = document.getElementById("message").value;
  
//     // Concaténer le prénom et le nom pour former le nom complet de l'expéditeur
//     const nomComplet = prenom + " " + nom;
  
//     Email.send({
//       Host: "smtp.yourisp.com",
//       Username: "username",
//       Password: "password",
//       To: "them@website.com",
//       From: userEmail, // Utiliser l'adresse e-mail de l'utilisateur ici
//       Subject: sujet,
//       Body: "Nom de l'expéditeur : " + nomComplet + "\n\n" + message
//     }).then(
//       message => alert("E-mail envoyé avec succès !")
//     );
//   });
  