

function quantity(itemId, amountId, quantityId, priceId, taxId){
    var itemsLeft = document.getElementById(quantityId).innerHTML;
    var itemsPurchased = document.getElementById(amountId).value;
    
    if ((parseInt(itemsLeft)-parseInt(itemsPurchased)) < 0){
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }

    else {
        document.getElementById(quantityId).innerHTML = parseInt(itemsLeft)-parseInt(itemsPurchased);
        updateCart(itemId, amountId, priceId, taxId);
    }
}
inames = [];
iqtyp = [];
iprice = [];
itax = [];

function updateCart(itemId, amountId, priceId, taxId){
        inames.push(document.getElementById(itemId).textContent);
        iqtyp.push(document.getElementById(amountId).value);
        iprice.push(parseFloat(document.getElementById(priceId).innerHTML));
        itax.push(parseFloat(document.getElementById(taxId).innerHTML));
        showCart();
}

function showCart(){
    cartData = '<table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
    total = 0;

    for(i=0; i<inames.length; i++){
        total+= iqtyp[i]*iprice[i]*(1+itax[i]);
        cartData += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>"+ iqtyp[i]*iprice[i]*(1+itax[i]) + "</td><td><button onclick='deleteElement(" + i +")'>Delete</button></td></tr>"
    }
    cartData += '<tr><td></td><td></td><td><t/d><td>' + total + '</td></tr></table>';

    document.getElementById('basket').innerHTML = cartData;
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