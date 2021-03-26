/* Extract the querystring from the URL. */
var formDataString = window.location.search;

/* Declare a new map to hold form data. */
var formDataMap = new Map();

/* Declare a variable to keep track of current position in string; initialize to 1 (index of first char after ?) */
var pos = 1;

/* Iterate through the formDataString, mapping each variable name with the associated value. */
while (pos < formDataString.length) {
    /* Declare empty string variables to hold the name and value of each parameter. */
    var name = "";
    var value = "";
    
    /* Extract the next variable name from the formDataString. */
    while (formDataString.charAt(pos) !== '=') {
        name += formDataString.charAt(pos);
        pos++;
    }
    
    /* Increment pos to skip over the '=' */
    pos++;
    
    /* Extract the value of the variable from the string. */
    while (pos < formDataString.length && formDataString.charAt(pos) !== '&') {
        /* If current char is not a '+', append it to 'value' string. */
        if (formDataString.charAt(pos) !== '+') {
            value += formDataString.charAt(pos);
        }
        /* Otherwise, if it is a '+' character, add a ' ' character to the string instead. */
        else {
            value += ' ';
        }
        pos++;
    }
    
    /* If the name-value pair just read in does not correspond to the submit button, add it to the formDataMap and increment 'pos' to skip past the ampersand in preparation for the next iteration. */
    if(name !== 'submit') {
        formDataMap.set(name, value);
        pos++;
    }
    
    /* If the name-value pair just read in corresponds to the 'submit' button, do not add this to the formDataMap. */
}

/* Display the results using DOM manipulation. */
var mainContent = document.getElementById('mainContent');

/* Display a header that includes the church name. */
var resultsHead = document.createElement('h2');
resultsHead.textContent = 'Church Accessibility Self-Evaluation Results for ' + (formDataMap.get('church-name') || '(church not specified)') + ':';

mainContent.appendChild(resultsHead);

var lineBreak = document.createElement("br");
mainContent.appendChild(lineBreak);

/* Display demographic data. */

var demographicHead = document.createElement("h3");
demographicHead.textContent = "Demographics of User:";
mainContent.appendChild(demographicHead);

var demographicsList = document.createElement("ul");

var gender = document.createElement("li");
gender.textContent = "Gender: " + (formDataMap.get('gender') || "(not specified)");
demographicsList.appendChild(gender);

var age = document.createElement("li");
age.textContent = "Age: " + (formDataMap.get('age') || "(not specified)");
demographicsList.appendChild(age);

var churchRole = document.createElement("li");
churchRole.textContent = "Church Role: ";
if (formDataMap.get('church-role') === "none-selected") {
    churchRole.textContent += "(not specified)";
}
else {
    churchRole.textContent += formDataMap.get('church-role');
}
demographicsList.appendChild(churchRole);

/* Process disability status using array since checkboxes are involved. */
var disabilityStatus = document.createElement("li");
disabilityStatus.textContent = "Disability Status: ";

/* Place values that user checked into array. */
var disabilityArray = [];
if (formDataMap.get("not-disabled")) {
    disabilityArray.push("not disabled");
}
if (formDataMap.get("disabled")) {
    disabilityArray.push("disabled");
}
if (formDataMap.get("parent")) {
    disabilityArray.push("parent of a child with a disability");
}

/* Convert the array results to DOM content. */
if (disabilityArray.length === 0) {
    disabilityStatus.textContent += "(not specified)";
}
else {
    for (var i = 0; i < disabilityArray.length; i++) {
        disabilityStatus.textContent += disabilityArray[i];
        if (i < (disabilityArray.length - 1)) {
            disabilityStatus.textContent += ", "
        }
    }
}
demographicsList.appendChild(disabilityStatus);

mainContent.appendChild(demographicsList);

var lineBreak = document.createElement("br");
mainContent.appendChild(lineBreak);

/* Tabulate number of 'yes' answers in each remaining section of the form to indicate priority areas to the user. */
var areaResultsHead = document.createElement("h3");
areaResultsHead.textContent = "Assessment Results in Each Area: ";
mainContent.appendChild(areaResultsHead);

var areaResultsDescription = document.createElement("p");
areaResultsDescription.textContent = "Below are the number of questions to which you answered ‘yes’ in each accessibility area. The more ‘yes’ answers there are in an area, the higher level of accessibility / disability friendliness it indicates.";
mainContent.appendChild(areaResultsDescription);

var resultsList = document.createElement("ul");

const QUESTIONS_PER_AREA = 4;       // all areas have same number of questions.

var awareness = document.createElement("li");
var awarenessScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "aware" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        awarenessScore++;
    }
}
awareness.textContent = "Awareness: " + awarenessScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(awareness);

var building = document.createElement("li");
var buildingScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "building" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        buildingScore++;
    }
}
building.textContent = "Physical Building: " + buildingScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(building);

var community = document.createElement("li");
var communityScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "community" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        communityScore++;
    }
}
community.textContent = "Community Outreach: " + communityScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(community);

var media = document.createElement("li");
var mediaScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "media" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        mediaScore++;
    }
}
media.textContent = "Music and Multimedia: " + mediaScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(media);

var resources = document.createElement("li");
var resourcesScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "resources" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        resourcesScore++;
    }
}
resources.textContent = "Resources and Curriculum: " + resourcesScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(resources);

var events = document.createElement("li");
var eventsScore = 0;
for (var i = 0; i < QUESTIONS_PER_AREA; i++) {
    /* Calculate key value of each question id */
    var questionKey = "events" + (i + 1);
    if (formDataMap.get(questionKey) === 'yes') {
        eventsScore++;
    }
}
events.textContent = "Events: " + eventsScore + " of " + QUESTIONS_PER_AREA;
resultsList.appendChild(events);

mainContent.appendChild(resultsList);