function displayForm1Info() {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    let url = document.getElementById('inputURL').value;
    console.log('email: ' + email + ' | ' + 'password: ' + password + ' | ' + 'url: ' + url);
}

function displayForm2Info() {
    let productNumber = document.getElementById('productNumber').value;
    let supplier = document.getElementById('supplier').value;
    let productName = document.getElementById('productName').value;
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unitPrice').value;
    let dateSupplied = document.getElementById('dateSupplied').value;
    alert('productNumber: ' + productNumber + ' | ' + 'supplier: ' + supplier + ' | ' +
        'productName: ' + productName + ' | ' + 'quantity: ' + quantity + ' | ' +
        'unitPrice: ' + unitPrice + ' | ' + 'dateSupplied: ' + dateSupplied);
}