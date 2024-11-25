"use strict";
class Customer {
    constructor() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = true;
    }
    getData() {
        return `${this.name} (${this.nip})`;
    }
    ;
    getAddress() {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    ;
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.accountNumber = "";
        this.invoices = [];
        accountNumber = accountNumber;
    }
}
