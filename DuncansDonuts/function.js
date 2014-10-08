/**
 * Created by jsg665 on 10/7/2014.
 */

function updateOrder() {
    const TAXRATE = 0.095;
    var cakeDonutPrice = 0.75;
    var glazedDonutPrice = 0.50;
    var numCakeDonuts = parseInt(document.getElementById("cakedonuts").value);
    var numGlazedDonuts = parseInt(document.getElementById("glazeddonuts").value);

    if (isNaN(numCakeDonuts))
    numCakeDonuts = 0;

    if (isNaN(numGlazedDonuts))
    numGlazedDonuts = 0;

    var subTotal = (numCakeDonuts * cakeDonutPrice) + (numGlazedDonuts *glazedDonutPrice);
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}//end updateOrder

function placeOrder() {
// Submit order to server...
    form.submit();
}//end placeOrder