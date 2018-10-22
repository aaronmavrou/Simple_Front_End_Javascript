
taxIds = ['stickTax', 'batTax', 'footballTax', 'gloveTax', 'shoeTax', 'baseballTax', 'puckTax', 'basketballTax', 'racketTax', 'gatoradeTax']
qIds = ['sticksLeft', 'batsLeft', 'footballsLeft', 'glovesLeft', 'shoesLeft', 'baseballsLeft', 'pucksLeft', 'basketballsLeft', 'racketsLeft', 'gatoradesLeft']
itemIds = ['stick', 'bat', 'football', 'glove', 'shoes', 'baseball', 'puck', 'basketball', 'racket', 'gatorade']

function password(passwordId) {
    var thePassword = document.getElementById(passwordId).value;
    if (thePassword.toUpperCase() == "123") {
        alert("You are logged in!");
        passwordStuff();
    }
}

function passwordStuff() {
    for (i = 0; i < itemIds.length; i++) {
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Change Amount of Stock  ");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        var addQuantity = document.createElement("input");
        addQuantity.type = 'number';
        addQuantity.value = 1;
        addQuantity.size = 5;
        addQuantity.id = i;
        btn.setAttribute("onClick", "javascript: adminQuantity(" + i + ',' + addQuantity.id + ");");
        document.getElementById(itemIds[i]).appendChild(btn);
        document.getElementById(itemIds[i]).appendChild(addQuantity);

        var addBreak = document.createElement("br");
        document.getElementById(itemIds[i]).appendChild(addBreak);
        var addBreak1 = document.createElement("br");
        document.getElementById(itemIds[i]).appendChild(addBreak1);

        var button = document.createElement("BUTTON");
        var n = document.createTextNode("Change Tax Rate  ");       // Create a text node
        button.appendChild(n);                                // Append the text to <button>
        var theTax = document.createElement("input");
        theTax.type = 'text';
        theTax.value = 1;
        theTax.size = 5;
        theTax.id = i + 100;
        button.setAttribute("onClick", "javascript: adminTax(" + i + ',' + theTax.id + ");");
        document.getElementById(itemIds[i]).appendChild(button);
        document.getElementById(itemIds[i]).appendChild(theTax);
    }

}

function adminQuantity(identifier, amount) {
    document.getElementById(qIds[identifier]).innerHTML = parseInt(document.getElementById(amount).value);

}
function adminTax(num, number) {
    document.getElementById(taxIds[num]).innerHTML = parseFloat(document.getElementById(number).value);
}





function quantity(itemId, amountId, quantityId, priceId, taxId, buttonId) {
    var itemsLeft = document.getElementById(quantityId).innerHTML;
    var itemsPurchased = document.getElementById(amountId).value;

    if ((parseInt(itemsLeft) - parseInt(itemsPurchased)) < 0) {
        alert("This is more than the available quantity. Please enter a new quantity in the range");
    }

    else if (itemsPurchased <= 0) {
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
        cartData += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i].toFixed(2) + "</td><td>" + (iprice[i] * iqtyp[i]).toFixed(2) + "</td><td>" + itax[i].toFixed(2) + "</td><td>" + (iqtyp[i] * iprice[i] * (1 + itax[i])).toFixed(2) + "</td><td><button onclick='deleteElement(" + i + ")'>Delete</button></td>" + "</td><td><button onclick='increaseQuantity(" + i + ")'>+</button></td>" + "</td><td><button onclick='decreaseQuantity(" + i + ")'>-</button></td></tr>";
    }
    cartData += '<tr><td></td><td></td><td></td><td></td><td><t/d><td>' + total.toFixed(2) + '</td></tr></table>';

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
        buttonIds.splice(a, 1);
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
    buttonIds.splice(x, 1);
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
            buttonIds.splice(0, 1);
        }
        showCart();
    }
}

function purchaseMade() {
    var torf = confirm('Are you sure?');

    if (torf) {
        for (i = 0; i < inames.length; i) {
            inames.splice(0, 1);
            iqtyp.splice(0, 1);
            iprice.splice(0, 1);
            itax.splice(0, 1);
            quantityIds.splice(0, 1);
            document.getElementById(buttonIds[i]).disabled = false;
            buttonIds.splice(0, 1);
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