
taxIds = ['stickTax', 'batTax', 'footballTax' , 'gloveTax', 'shoeTax', 'baseballTax', 'puckTax', 'basketballTax', 'racketTax', 'gatoradeTax']
qIds = ['sticksLeft', 'batsLeft', 'footballsLeft', 'glovesLeft', 'shoesLeft', 'baseballsLeft', 'pucksLeft', 'basketballsLeft', 'racketsLeft', 'gatoradesLeft']
itemIds = ['stick', 'bat', 'football', 'glove', 'shoes', 'baseball', 'puck', 'basketball','racket', 'gatorade']

function passwordStuff(){
    var t = document.createTextNode("Change Quantity  ");
    var x = document.createTextNode("Change Tax Rate  ");

    //input for the quantity
    var stickQ = document.createElement("span");
    stickQ.appendChild(t);
    document.getElementById("stickAdmin").appendChild(stickQ);

    var stickInputQuantity = document.createElement("input");
    stickInputQuantity.type = "number";
    stickInputQuantity.id = "stickQuantityId";
    document.getElementById("stickAdmin").appendChild(stickInputQuantity);

    var stickQEnter = document.createElement("button");
    stickQEnter.type = "button";
    stickQEnter.innerHTML = "Enter";
    stickQEnter.setAttribute("onclick", "javascript adminEntersQuantity(" + stickInputQuantity.id+ ','+'sticksLeft'+");");
    document.getElementById("stickAdmin").appendChild(stickQEnter);

    var stickSpace0 = document.createElement("br");
    document.getElementById("stickAdmin").appendChild(stickSpace0);



    var stickT = document.createElement("span");
    stickT.appendChild(x);
    document.getElementById("stickAdmin").appendChild(stickT);

    var stickInputTax = document.createElement("input");
    stickInputTax.type = "number";
    stickInputTax.id = "stickQuantityId";
    document.getElementById("stickAdmin").appendChild(stickInputTax)

    var stickTEnter = document.createElement("button");
    stickTEnter.type = "button";
    stickTEnter.innerHTML = "Enter";
    //stickTEnter.onclick = "adminEnters('stickQuantityId', 'taxQuantityId', 'sticksLeft', 'stickTax')"
    document.getElementById("stickAdmin").appendChild(stickTEnter);

    var stickSpace1 = document.createElement("br");
    document.getElementById("stickAdmin").appendChild(stickSpace1);

    
}


function adminEntersQuantity(newQuantityID, actualId ){
    document.getElementById(actualId).innerHTML = document.getElementById(newQuantityID).value;
}

function password(passwordId){
    var jacob = document.getElementById(passwordId).value;
    if(jacob.toUpperCase() == "123"){
        alert("it works hoe");
        passwordStuff();
    }
}

function quantity(itemId, amountId, quantityId, priceId, taxId, buttonId) {
    var itemsLeft = document.getElementById(quantityId).innerHTML;
    var itemsPurchased = document.getElementById(amountId).value;

    if ((parseInt(itemsLeft) - parseInt(itemsPurchased)) < 0) {
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }
    
    else if (itemsPurchased <= 0){
        alert("This is an invalid quantity number. Please try again");
    }

    else {
        document.getElementById(quantityId).innerHTML = parseInt(itemsLeft) - parseInt(itemsPurchased);
        quantityIds.push(quantityId);
        updateCart(itemId, amountId, priceId, taxId);
        document.getElementById(buttonId).disabled = true;
        buttonIds.push(buttonId);
    }
}

buttonIds = [];
quantityIds = [];
inames = [];
iqtyp = [];
iprice = [];
itax = [];

function updateCart(itemId, amountId, priceId, taxId) {
    inames.push(document.getElementById(itemId).textContent);
    iqtyp.push(document.getElementById(amountId).value);
    iprice.push(parseFloat(document.getElementById(priceId).innerHTML));
    itax.push(parseFloat(document.getElementById(taxId).innerHTML));
    showCart();
}

function showCart() {
    cartData = '<table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Subtotal</th><th>Tax</th><th>Total</th></tr>';
    total = 0;

    for (i = 0; i < inames.length; i++) {
        total += iqtyp[i] * iprice[i] * (1 + itax[i]);
        cartData += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iprice[i]*iqtyp[i] + "</td><td>" + itax[i] + "</td><td>" + iqtyp[i] * iprice[i] * (1 + itax[i]) + "</td><td><button onclick='deleteElement(" + i + ")'>Delete</button></td>" + "</td><td><button onclick='increaseQuantity(" + i + ")'>+</button></td>" + "</td><td><button onclick='decreaseQuantity(" + i + ")'>-</button></td></tr>";
    }
    cartData += '<tr><td></td><td></td><td></td><td></td><td><t/d><td>' + total + '</td></tr></table>';

    document.getElementById('basket').innerHTML = cartData;
}

function increaseQuantity(a) {
    if (parseInt(document.getElementById(quantityIds[a]).innerHTML) > 0) {
        iqtyp[a] = parseInt(iqtyp[a]) + 1;
        document.getElementById(quantityIds[a]).innerHTML = parseInt(document.getElementById(quantityIds[a]).innerHTML) - 1;
    }

    else {
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }
    showCart();
}

function decreaseQuantity(a) {
    iqtyp[a] = parseInt(iqtyp[a]) - 1;
    document.getElementById(quantityIds[a]).innerHTML = parseInt(document.getElementById(quantityIds[a]).innerHTML) + 1;
    if (parseInt(iqtyp[a]) == 0) {
        inames.splice(a, 1);
        iqtyp.splice(a, 1);
        iprice.splice(a, 1);
        itax.splice(a, 1);
        quantityIds.splice(a, 1);
        document.getElementById(buttonIds[a]).disabled = false;
        buttonIds.splice(a,1);
    }
    showCart();
}

function deleteElement(x) {
    document.getElementById(quantityIds[x]).innerHTML = parseInt(iqtyp[x]) + parseInt(document.getElementById(quantityIds[x]).innerHTML);
    inames.splice(x, 1);
    iqtyp.splice(x, 1);
    iprice.splice(x, 1);
    itax.splice(x, 1);
    quantityIds.splice(x, 1);
    document.getElementById(buttonIds[x]).disabled = false;
    buttonIds.splice(x,1);
    showCart();
}

function clearBasket() {
    var torf = confirm('Are you sure?');
    if (torf) {
        for (i = 0; i < inames.length; i) {
            var itemTotal = parseInt(document.getElementById(quantityIds[i]).innerHTML);
            document.getElementById(quantityIds[i]).innerHTML = parseInt(iqtyp[i]) + itemTotal;
            inames.splice(0, 1);
            iqtyp.splice(0, 1);
            iprice.splice(0, 1);
            itax.splice(0, 1);
            quantityIds.splice(0, 1);
            document.getElementById(buttonIds[i]).disabled = false;
            buttonIds.splice(0,1);
        }
        showCart();
    }
}

function purchaseMade() {
    var torf = confirm('Are you sure?');

    if (torf) {
        for (i = 0; i < inames.length; i) {
            inames.splice(0,1);
            iqtyp.splice(0,1);
            iprice.splice(0,1);
            itax.splice(0,1);
            quantityIds.splice(0,1);
            document.getElementById(buttonIds[i]).disabled = false;
            buttonIds.splice(0,1);
        }
        showCart();
    }
}


function changeLanguage() {
    var language = document.getElementsByName("language");
    if (language[0].checked) {
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