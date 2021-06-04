var oscars = false;
var cesars = false;
var baftas = false;

// Listener for submit button
document.getElementById("submit").onclick = function () {
    // set session storage variables so that we can use them across the different files
    sessionStorage.setItem('oscars', oscars);
    sessionStorage.setItem('cesars', cesars);
    sessionStorage.setItem('baftas', baftas);
    // do not allow user to go to main if no awards have been selected
    if (oscars == false && cesars == false && baftas == false) {
        alert("Please select at least one award.")
    }
    else document.location.pathname = "main.html";
}

// Listener for Oscars checkbox
// Calls the toggle function to switch active state
// toggle function returns a boolean variable so that we can set the session variables
document.getElementById("checkboxO").onclick = function () {
    oscars = toggle(this);
};

// Listener for Césars checkbox
document.getElementById("checkboxC").onclick = function () {
    cesars = toggle(this)
};

// Listener for BAFTAS checkbox
document.getElementById("checkboxB").onclick = function () {
    baftas = toggle(this)
};

// Switches active state of checkbox component
function toggle(check) {
    if (check.className == "Widget-checkbox") {
        check.className = "Widget-checkbox active";
        return true;
    } else {
        check.className = "Widget-checkbox";
        return false;
    }
}