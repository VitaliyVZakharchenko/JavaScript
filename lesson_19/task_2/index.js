'use strict';

export const vehicle = {
    street: 'Argo1',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    // __proto__: vehicle
};

Object.setPrototypeOf(ship, vehicle);

export function getOwnProps(obj) {
    let propObj = [];
    
    for(let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            propObj.push(prop)    
        }
    }    
    return propObj;
}

const result = getOwnProps(ship);
console.log(result);