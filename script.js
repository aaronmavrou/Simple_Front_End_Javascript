

function quantity(qId, leftId){
    var itemsLeft = document.getElementById(leftId).innerHTML;
    var itemsPurchased = document.getElementById(qId).value;
   // document.getElementById("Stick").innerHTML = parseInt(itemsLeft);
    
   // if (parseInt(itemsPurchased) > parseInt(itmesLeft)){
        //document.getElementById("Stick").innerHTML = parseInt(itemsLeft) - parseInt(itemsPurchased);
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    //}

    //else {
     //   parseInt(leftId) = parseInt(leftId)-parseInt(qId);
    //}
}

function updateCart(){

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