
/* DOM functions */

//function to execute when page loads
window.onload = function () {
    // start by going parsing the json (asynchronously)
    parseJson();

    // if session storage value is true, set display style to flex
    if (sessionStorage.getItem("oscars") == 'true') {
        document.getElementById("oscars-line").style.display = "flex"
    } else document.getElementById("oscars-line").style.display = "none"

    if (sessionStorage.getItem("cesars") == 'true') {
        document.getElementById("cesars-line").style.display = "flex"
    } else document.getElementById("cesars-line").style.display = "none"

    if (sessionStorage.getItem("baftas") == 'true') {
        document.getElementById("baftas-line").style.display = "flex"
    } else document.getElementById("baftas-line").style.display = "none"

    retrieveYears();
}

document.getElementById("back").onclick = function () {
    document.location.pathname = "index.html"
}

/* Backend Functions */

/* Function to fetch data currently in the data.json file */
// uses the async fetch function and waits until the data is returned to display it
function parseJson() {
    fetch("./data.json")
        .then(response => {
            return response.json();
        })
        .then(data => buildData(data));
}

/* Function to set y axis paramaters (years) */
function retrieveYears() {

    var years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
        '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

    // for each year, create a y axis point for that year
    years.forEach((year) => {
        document.getElementById("diagram-bot").innerHTML += '<div class="diagram-lineRightContainer"><span class= "diagram-lineRightText"> ' + year + '</span></div> '
    })
}

/* Main data to pull and set data visualization */
// The function pulls the data in the data.json file
// 
function buildData(data) {

    var oscarsIndex = 0;
    var cesarsIndex = 0;
    var baftasIndex = 0;

    // for loop over data in the oscars array in the json
    for (let i = 0; i < data.oscars.length; i++) {
        var width_height = 0;
        // based on the amount of nominees, scale the dot size
        if (data.oscars[i].women_nominees > 0) {
            width_height = 8 + (7 * data.oscars[i].women_nominees);
        }
        // create new unique id for each item 
        var id = 'oscars' + oscarsIndex;

        // create a new element container (this is done to maintaine even spacing accross all items)
        var newElementContainer = document.createElement('div');
        newElementContainer.className = "diagram-lineRightContainer";

        // create dot element
        var newElement = document.createElement('div');
        newElement.className = "diagram-lineRightDot";
        newElement.id = id;
        newElement.style.width = width_height + 'px';
        newElement.style.height = width_height + 'px';

        // check whether a winner has been declared and switch dot color
        if (data.oscars[i].winner != "") {
            newElement.style.backgroundColor = 'gold';
        }

        // listeners that handle dot hover event to display nominees and winner names
        newElement.addEventListener("mouseenter", enter(data.oscars[i].names, data.oscars[i].winner));
        newElement.addEventListener("mouseleave", leave());

        // append all into main.html
        newElementContainer.appendChild(newElement);
        document.getElementById('lineO').appendChild(newElementContainer);

        oscarsIndex += 1; // increment index to maintain unique id 

    }

    // for loop over data in the cesars array in the json
    for (let i = 0; i < data.cesars.length; i++) {
        var width_height = 0;
        if (data.cesars[i].women_nominees > 0) {
            width_height = 8 + (7 * data.cesars[i].women_nominees);
        }
        var id = 'cesars' + cesarsIndex;
        var newElementContainer = document.createElement('div');
        newElementContainer.className = "diagram-lineRightContainer";
        var newElement = document.createElement('div');
        newElement.className = "diagram-lineRightDot";
        newElement.id = id;
        newElement.style.width = width_height + 'px';
        newElement.style.height = width_height + 'px';

        if (data.cesars[i].winner != "") {
            newElement.style.backgroundColor = 'gold';
        }

        newElement.addEventListener("mouseenter", enter(data.cesars[i].names, data.cesars[i].winner));
        newElement.addEventListener("mouseleave", leave());
        newElementContainer.appendChild(newElement);
        document.getElementById('lineC').appendChild(newElementContainer);

        cesarsIndex += 1;

    }

    // for loop over data in the baftas array in the json
    for (let i = 0; i < data.baftas.length; i++) {
        var width_height = 0;
        if (data.baftas[i].women_nominees > 0) {
            width_height = 8 + (7 * data.baftas[i].women_nominees);
        }
        var id = 'baftas' + baftasIndex;
        var newElementContainer = document.createElement('div');
        newElementContainer.className = "diagram-lineRightContainer";
        var newElement = document.createElement('div');
        newElement.className = "diagram-lineRightDot";
        newElement.id = id;
        newElement.style.width = width_height + 'px';
        newElement.style.height = width_height + 'px';

        if (data.baftas[i].winner != "") {
            newElement.style.backgroundColor = 'gold';
        }

        newElement.addEventListener("mouseenter", enter(data.baftas[i].names, data.baftas[i].winner));
        newElement.addEventListener("mouseleave", leave());
        newElementContainer.appendChild(newElement);
        document.getElementById('lineB').appendChild(newElementContainer);

        baftasIndex += 1;

    }

    /* Function to handle listener for when the user hovers over a dot */
    // it takes as parameters the name of the winner and the array of nominee name's
    function enter(arr, winner) {
        return function () {
            document.getElementById('data').innerHTML = ""; // reset internal html to null
            document.getElementById('data').innerHTML += "<span class='data-displayTitle'>Nominees</span>" // add title
            // for each nominee, create a new container and add their name as inner text
            arr.forEach(nominee => {
                var elementContainer = document.createElement('div');
                elementContainer.className = "data-displayTextLine";

                var element = document.createElement('span');
                if (nominee != winner) {
                    element.className = "data-displayText";
                } else { // if nominee and winner name match, display the name as winner
                    element.className = "data-displayTextWinner";
                    var winElement = document.createElement('span');
                    winElement.className = "data-displayWin";
                    winElement.innerText = "WIN";
                    elementContainer.appendChild(winElement);
                }
                element.innerText = nominee;

                elementContainer.appendChild(element);
                document.getElementById('data').appendChild(elementContainer);
            })
            document.getElementById('data').style.opacity = "1"; // set container div opacity to 1 
        }
    }

    /* Function to handle listener for whent he user stops hovering over a dot */
    function leave() {
        return function () {
            document.getElementById('data').style.opacity = "0"; // set container div opacity to 0 
        }
    }


}
