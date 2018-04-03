var team = [];
var roleplaySubject;
var seller;
var customer;

var subjectList = [
    "JWI",
    "club recruitment",
    "selling silver",
    "selling gold",
    "selling diamonds",
    "selling Hugo Boss",
    "selling Michael Kors watches",
    "selling Michael Kors jewellery",
    "selling wedding bands",
    "selling diamond jewellery",
    "selling Emporio Armani",
    "selling Vivienne Westwood",
    "selling Ted Baker",
    "selling Armani Exchange",
    "selling Swarovski jewellery",
    "selling Olivia Burton jewellery",
    "selling Olivia Burton watches",
    "selling Links of London",
    "a Thomas Sabo interaction",
    "a sales interaction, start to end",
    "establishing the customer's needs, with open questions",
    "closing a sale",
    "handling objections and 're-closing'",
    "negotiating with a customer",
    "selling a pearl item",
    "selling an emerald piece",
    "selling an aquamarine",
    "selling a 'Silhouette' piece",
    "selling a 'Glitter' piece",
    "selling an 'Era' piece",
    "selling a ruby piece",
    "selling a morganite piece",
    "selling your least favourite item",
    "selling your favourite item",
    "dealing with an indecisive customer",
    "the approach and hosting of a customer"
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function newTeamMember() {
    var input = document.getElementById("input").value;
    var ul    = document.getElementById("teamList");
    var li    = document.createElement("li");
    
    addNameToArr(input);
    
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("input").value = "";
}

function addNameToArr(name){
    team.push(name);
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        newTeamMember();
    }
}

function reset() {
    team = [];
    document.getElementById("teamList").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}

function generateRoleplay() {
    roleplaySubject = randomValueFromArray(subjectList);
    seller = randomValueFromArray(team)
    customer = randomValueFromArray(team);
    
    if (seller === customer) {
        customer = randomValueFromArray(team);
    }
}

function updateScreen() {
    var roleplay = "The seller is " + seller + ", and the customer is " + customer + ". You will roleplay " + roleplaySubject + "."
    document.getElementById("output").innerHTML = roleplay;
}

document.getElementById("generateButton").onclick = function() {
    document.getElementById("output").innerHTML = "";
    generateRoleplay();
    if (seller == undefined) {
        document.getElementById("output").innerHTML = "Please enter some team names above before generating a roleplay.";
    } else {
        updateScreen();
    }
}

document.getElementById("resetButton").onclick = function() {
    reset();
}