/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {

    // 'Fetching Planetary Data' goes below:
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            ind = getRandomInt(json.length);
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[ind].name}</li>
                <li>Diameter: ${json[ind].diameter}</li>
                <li>Star: ${json[ind].star}</li>
                <li>Distance from Earth: ${json[ind].distance}</li>
                <li>Number of Moons: ${json[ind].moons}</li>
            </ol>
            <img src="${json[ind].image}">`
        });
    /* This block of code shows how to format the HTML once you fetch some planetary JSON!
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
        </ol>
        <img src="${}">
        */
    });


    // 'Adding Validation' and 'Updating Shuttle Requirements' go below
    // use this link if you need help with validation: https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation
    let formInputs = document.querySelector("form");
    formInputs.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name = pilotName]");
        let copilotName = document.querySelector("input[name = copilotName]");
        let fuelLevel = document.querySelector("input[name = fuelLevel]");
        let cargoMass = document.querySelector("input[name = cargoMass]");
        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.querySelector("#faultyItems");

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Invalid input. Please fill form with valid data.");
            event.preventDefault();
        } else {
            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
                event.preventDefault();
                faultyItems.setAttribute("style", "visibility: visible"); 

            } else if (cargoMass.value > 10000) {
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
                event.preventDefault();
                faultyItems.setAttribute("style", "visibility: visible"); 

            } else if (fuelLevel.value < 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
                event.preventDefault();
                faultyItems.setAttribute("style", "visibility: visible"); 

            } else {
                launchStatus.innerHTML = "Shuttle Ready for Launch";
                launchStatus.style.color = "green";
                event.preventDefault();
            }
        }

        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready`;

        
        
    });
   
});