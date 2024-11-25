"use strict";
class Customer {
    constructor() {
        this.firmName = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = "";
        this.numerDomu = "";
        this.numerMieszkania = "";
        this.kodPocztowy = "";
        this.branza = "";
        this.uwagi = "";
    }
    getData() {
        return `${this.firmName} (${this.nip})`;
    }
    ;
    getAddress() {
        return `Miasto: ${this.miasto} (${this.street})`;
    }
    ;
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.invoices = [];
        accountNumber = accountNumber;
    }
}
