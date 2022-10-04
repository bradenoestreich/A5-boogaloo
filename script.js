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
    fetch().then(function (response) {
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
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
        if (!isNaN(pilotName.value)) {
            alert("Invalid input. Please write a name.");
            event.preventDefault();
        }
        if (!isNaN(copilotName.value)) {
            alert("Invalid input. Please write a name.");
            event.preventDefault();
        }
        if (isNaN(fuelLevel.value)) {
            alert("Invalid input. Please submit a valid number.");
            event.preventDefault();
        }
        if (isNaN(cargoMass.value)) {
            alert("Invalid input. Please submit a valid number.");
            event. preventDefault();
        }
        document.querySelector("#faultyItems").innerHTML {
            visibility: visible;
        }
        document.querySelector("pilotStatus").innerHTML = ` {{pilotName}} is ready.`;
        document.getElementById("copilotStatus").innerHTML = `{{copilotName}} is ready.`;
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Shuttle not ready for launch.`, color = red;
        }
        if (cargoMass > 10000) {
            document.getElementById("cargoStatus").innerHTML = `Shuttle not ready for launch.`, color = red;
        }
        
    });
   
});