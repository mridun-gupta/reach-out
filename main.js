/* redirectWeb Logic */
function redirectWeb() {
    var currentDomain = window.location.hostname;

    if (currentDomain === "contact.mridungupta.tech") {
        window.location.href = "https://www.mridungupta.tech";
    } else if (currentDomain === "contact.mridungupta.me") {
        window.location.href = "https://www.mridungupta.me";
    } else if (currentDomain === "contact.mridungupta.eu.org") {
        window.location.href = "https://www.mridungupta.eu.org";
    } else if (currentDomain === "contact.mridungupta.live") {
        window.location.href = "https://www.mridungupta.live";
    } else if (currentDomain === "contact.mridungupta.co") {
        window.location.href = "https://www.mridungupta.co";
    } else {
        document.getElementById("invalid-redirect").style.display = "block";
        console.log("Sorry! This isn't the real website run by 'Mridun Gupta'. Double check the official website for authenticity.");
    }
};

/* displayText Logic */
function displayText() {
    document.getElementById("text").style.display = "block";
}

/* dismissText Logic */
function dismissText() {
    document.getElementById("text").style.display = "none";
}

/* displayEmail Logic */
function displayEmail() {
    document.getElementById("email").style.display = "block";
}

/* dismissEmail Logic */
function dismissEmail() {
    document.getElementById("email").style.display = "none";
}

/* displayX Logic */
function displayX() {
    document.getElementById("x").style.display = "block";
}

/* dismissX Logic */
function dismissX() {
    document.getElementById("x").style.display = "none";
}

/* displayWhatsapp Logic */
function displayWhatsapp() {
    document.getElementById("whatsapp").style.display = "block";
}

/* dismissWhatsapp Logic */
function dismissWhatsapp() {
    document.getElementById("whatsapp").style.display = "none";
}

/* dismissOverlay Logic */
function dismissOverlay() {
    document.getElementById("invalid-redirect").style.display = "none";
}