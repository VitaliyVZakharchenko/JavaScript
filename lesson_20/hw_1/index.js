'use strict';

class Order {
    constructor(price, city, type) {
        this.id = String(Math.random());
        this.price = price;
        this.dateCreated;
        this.isConfirmed;
        this.dateConfirmed;
        this.city = city;
        this.type = type;
    }

    checkPrice(price) {
        // if (price > 1000) {
        //     return true;
        // } else {
        //     return false;
        // }
        return price > 1000;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell');
    }
}