'use strict';

const wallet = {
    transactions: [1, 56, 8, -15, 4],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    }
}