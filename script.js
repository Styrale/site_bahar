// script.js

function showProtocolInfo() {
    const protocolImage = document.getElementById("protocolImage");
    const protocolInfo1 = document.getElementById("protocolInfo1");
    const protocolInfo2 = document.getElementById("protocolInfo2");
    const submitImage = document.getElementById("submitImage");
    const submitInfo1 = document.getElementById("submitInfo1");
    const submitInfo2 = document.getElementById("submitInfo2");

    // Ajouter l'animation à l'image
    protocolImage.classList.add("turning");
    submitInfo1.classList.add("hidden");
    submitInfo2.classList.add("hidden");

    // Attendre la fin de l'animation avant de montrer les informations
    protocolImage.addEventListener("animationend", function() {
        // Afficher les images d'information après l'animation
        protocolImage.classList.add("hidden");
        submitImage.classList.add("hidden");
        protocolInfo1.classList.remove("hidden");
        protocolInfo1.classList.add("turning_2");
        protocolInfo2.classList.remove("hidden");
        protocolInfo2.classList.add("turning_2");
    });
}

function showSubmitInfo() {
    const protocolImage = document.getElementById("protocolImage");
    const protocolInfo1 = document.getElementById("protocolInfo1");
    const protocolInfo2 = document.getElementById("protocolInfo2");
    const submitImage = document.getElementById("submitImage");
    const submitInfo1 = document.getElementById("submitInfo1");
    const submitInfo2 = document.getElementById("submitInfo2");
    

    // Ajouter l'animation à l'image
    submitImage.classList.add("turning");
    protocolInfo1.classList.add("hidden");
    protocolInfo2.classList.add("hidden");

    // Attendre la fin de l'animation avant de montrer les informations
    submitImage.addEventListener("animationend", function() {
        // Afficher les images d'information après l'animation
        protocolImage.classList.add("hidden");
        submitImage.classList.add("hidden");
        submitInfo1.classList.remove("hidden");
        submitInfo1.classList.add("turning_2")
        submitInfo2.classList.add("turning_2")
        submitInfo2.classList.remove("hidden");
    });
}
