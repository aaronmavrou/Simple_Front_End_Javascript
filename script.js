


function alertMe() {
    alert("fuck this shit");
}

function overMax(){
    alert("This is more than the available quantity. Please enter a new quantity in the range");
}
 function (){
     
 }


function changeLanguage(){
    var language = document.getElementsByName("language");
    if(language[0].checked){
        document.getElementById("Stick").innerHTML = "Stick";
        document.getElementById("Bat").innerHTML = "Bat";
        document.getElementById("Football").innerHTML = "Football";
        document.getElementById("Glove").innerHTML = "Glove";
        document.getElementById("Shoes").innerHTML = "Shoes";
        document.getElementById("Baseball").innerHTML = "Baseball";
        document.getElementById("Puck").innerHTML = "Puck";
        document.getElementById("Basketball").innerHTML = "Basketball";
        document.getElementById("Racket").innerHTML = "Racket";
        document.getElementById("Gatorade").innerHTML = "Gatorade";
    }
    else {
        document.getElementById("Stick").innerHTML = "Crosse";
        document.getElementById("Bat").innerHTML = "Batte";
        document.getElementById("Football").innerHTML = "Football";
        document.getElementById("Glove").innerHTML = "Gant";
        document.getElementById("Shoes").innerHTML = "Chaussers";
        document.getElementById("Baseball").innerHTML = "Base-ball";
        document.getElementById("Puck").innerHTML = "Palet";
        document.getElementById("Basketball").innerHTML = "Basketball";
        document.getElementById("Racket").innerHTML = "Raquette";
        document.getElementById("Gatorade").innerHTML = "Gatorade";
    }
}