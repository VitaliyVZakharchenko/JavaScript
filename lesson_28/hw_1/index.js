'use strict';

export const shmoment = initValue => {
    let result = {
        years: initValue.getFullYear(),
        months: initValue.getMonth(),
        days: initValue.getDate(),
        hours: initValue.getHours(),
        minutes: initValue.getMinutes(),
        seconds: initValue.getSeconds(),
        milliseconds: initValue.getMilliseconds(),
    };

    const setNewData = {
        add(time, value) {
            result[time] += value;
            return this;
        },
        subtract(time, value) {
            result[time] -= value;
            return this;
        },
        result() {
            return new Date(result.years, result.months, result.days, result.hours, result.minutes, result.seconds, result.milliseconds)
        }
    }

    return setNewData;
};

// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result());