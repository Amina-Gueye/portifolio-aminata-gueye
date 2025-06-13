function envoyerMessage() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom === "" || email === "" || message === "") {
        alert("Merci de remplir tous les champs !")
    } else {
        alert("Merci " + nom + ", votre message a bien été envoyé !");
    }
}




