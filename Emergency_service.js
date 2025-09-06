console.log("Hello, World!");

let heartIcon = 0;

// wishlist feature
const wishlistElements = document.querySelectorAll('.wishlist');

wishlistElements.forEach(element => {
    element.addEventListener('click', function() {
        heartIcon++;
        document.getElementById("heart").innerText = heartIcon;
    });
});

// emergency call feature

function call(name, number) {
    if (document.getElementById("coin-count").innerText > 0) {
        alert("Calling " + name + " at " + number);
        let currentCoins = parseInt(document.getElementById("coin-count").innerText);
        currentCoins= currentCoins - 20;
        document.getElementById("coin-count").innerText = currentCoins;
    }
    else {
        alert("Insufficient coins to make a call.");
    }
}   

document.getElementById("national-emergency-call").addEventListener("click", function() {
    call(document.getElementById("National Emergency").innerText, document.getElementById("National Emergency Number").innerText);
});

document.getElementById("police-helpline-call").addEventListener("click", function() {
    call(document.getElementById("Police").innerText, document.getElementById("Police Helpline Number").innerText);
});

document.getElementById("fire-service-call").addEventListener("click", function() {
    call(document.getElementById("Fire Service").innerText, document.getElementById("Fire Service Number").innerText);
});

document.getElementById("ambulance-service-call").addEventListener("click", function() {
    call(document.getElementById("Ambulance").innerText, document.getElementById("Ambulance Service Number").innerText);
});

document.getElementById("women-child-helpline-call").addEventListener("click", function() {
    call(document.getElementById("women-child-helpline").innerText, document.getElementById("women-child-helpline-number").innerText);
});

document.getElementById("anti-corruption-helpline-call").addEventListener("click", function() {
    call(document.getElementById("Anti-Corruption").innerText, document.getElementById("Anti Corruption Helpline Number").innerText);
}   );

document.getElementById("electricity-helpline-call").addEventListener("click", function() {
    call(document.getElementById("Electricity Outage").innerText, document.getElementById("Electricity-Helpline-number").innerText);
}   );

document.getElementById("brac-helpline-call").addEventListener("click", function() {
    call(document.getElementById("Brac").innerText, document.getElementById("BRAC Helpline Number").innerText);
}   );

document.getElementById("bangladesh-railway-helpline-call").addEventListener("click", function() {
    call(document.getElementById("Bangladesh Railway").innerText, document.getElementById("Bangladesh Railway Helpline Number").innerText);
}   );



// copy to clipboard feature

let copyCount = 0;

function copyToClipboard(text) {
    alert("Copied: " + text);
    copyCount++;
    navigator.clipboard.writeText(text);
}

document.getElementById("copy-national-emergency").addEventListener("click", function() {
    copyToClipboard(document.getElementById("National Emergency Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-police-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Police Helpline Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-fire-service").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Fire Service Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-ambulance-service").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Ambulance Service Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-women-child-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("women-child-helpline-number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-anti-corruption-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Anti Corruption Helpline Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-electricity-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Electricity-Helpline-number").innerText,); 
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-brac-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("BRAC Helpline Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

document.getElementById("copy-bangladesh-railway-helpline").addEventListener("click", function() {
    copyToClipboard(document.getElementById("Bangladesh Railway Helpline Number").innerText);
    document.getElementById("copy-count").innerText = copyCount;
});

