

function quantity(qId, leftId){
    var itemsLeft = document.getElementById(leftId).innerHTML;
    var itemsPurchased = document.getElementById(qId).value;
    
    if ((parseInt(itemsLeft)-parseInt(itemsPurchased)) < 0){
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }

    else {
        document.getElementById(leftId).innerHTML = parseInt(itemsLeft)-parseInt(itemsPurchased);
    }
}
inames = [];
iqtyp = [];
iprice = [];

function updateCart(itemId, amountId, quantityId, priceId, buttonId){
    if (parseFloat(document.getElementById(quantityId).innerHTML) > document.getElementById(amountId).value){
        document.getElementById(quantityId).innerHTML = parseFloat(document.getElementById(quantityId).innerHTML)-document.getElementById(amountId).value;
        inames.push(document.getElementById(itemId).textContent);
        iqtyp.push(document.getElementById(amountId).value);
        iprice.push(parseFloat(document.getElementById(priceId).innerHTML));
        showCart();
    }
    else{
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }
}

function showCart(){
    cartData = '<table><tr><th>Product</th><th>Quantity</th><th>Total</th></tr>';
    total = 0;

    for(i=0; i<inames.length; i++){
        total+= iqtyp[i]*iprice[i];
        cartData += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>"+ iqtyp[i]*iprice[i] + "</td><td><button onclick='deleteElement(" + i +")'>Deletd</button></td></tr>"
    }
    cartData += '<tr><td></td><td></td><td><t/d><td>' + total + '</td></tr></table>';
}

function deleteElement(x){
    inames.splice(x,1);
    iqtyp.splice (x,1);
    iprice.splice(x,1);
    showCart();
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