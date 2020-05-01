class Product {
    constructor() {
        this.productName = '';
        this.productNumber = '';
        this.unitPrice = 0;
        this.quantityInStock = 0;
        this.supplier = '';
        this.dateSupplied = new Date();
    }
    add(name, number, price, quantity, supplier, dateSupplied) {
        this.productName = name;
        this.productNumber = number;
        this.unitPrice = price;
        this.quantityInStock = quantity;
        this.supplier = supplier;
        this.dateSupplied = new Date(dateSupplied);
    }
    toString() {
        return `Product name: ${this.productName}<br>
                Product number: ${this.productNumber}<br>
                Unit price: ${this.unitPrice}<br>
                Quantity in stock: ${this.quantityInStock}<br>
                Supplier: ${this.supplier}<br>
                Date supplied: ${Util.formatDate(this.dateSupplied)}`;
    }
}