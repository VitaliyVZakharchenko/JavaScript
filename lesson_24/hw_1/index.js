'use strict';

export const getDiff = (startDate, endDate) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // console.log(second, minute, hour, day);
    
    const difference = Math.abs(endDate - startDate);
    // console.log(difference);
    const daysDiff = Math.floor(difference / day);
    // console.log(daysDiff);
    const hoursDiff = Math.floor((difference % day) / hour);
    // console.log(hoursDiff);
    const minutesDiff = Math.floor((difference % hour) / minute);
    // console.log(minutesDiff);
    const secondsDiff = Math.floor((difference % minute) / second);
    // console.log(secondsDiff);

    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
};


// const start = new Date(2020, 1, 1, 13, 45, 7);
// const end = new Date(2020, 2, 15, 16, 40, 12);
// console.log(getDiff(start, end));