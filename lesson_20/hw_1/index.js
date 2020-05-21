'use strict';

export class Order {
    constructor(price, city, type) {
        this.id = String(Math.random());
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        // if (this.price > 1000) {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.price > 1000;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell');
    }
}