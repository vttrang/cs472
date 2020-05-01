$(document).ready(function() {
    "use strict";
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let email, password, url, checked;
        email = $('#inputEmail').val();
        password = $('#inputPassword').val();
        url = $('#inputURL').val();
        checked = $('#checkedBox').is(':checked');
        let loginForm = new LoginForm(email, password, url, checked);
        let valitionForm = loginForm.validate();
        if (valitionForm) {
            loginForm.submit();
        } else {
            console.log('Form validation FAILED');
        }
    });
    $('#productForm').on('submit', function(e) {
        e.preventDefault();
        let productName, productNumber, unitPrice, quantityInStock, supplier, dateSupplied;
        productName = $('#productName').val();
        productNumber = $('#productNumber').val();
        unitPrice = $('#unitPrice').val();
        quantityInStock = $('#quantity').val();
        supplier = $('#supplier option:selected').text();
        dateSupplied = $('#dateSupplied').val();
        let productForm = new Product();
        productForm.add(productName, productNumber, unitPrice, quantityInStock, supplier, dateSupplied);
        $('#result').html(productForm.toString());
    });
})