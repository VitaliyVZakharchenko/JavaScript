'use strict'

const splitText = (text, len = 10) => {
    if (typeof text !== 'string') {
        return null;
    }

    const srtArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        srtArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition =+ len;
    }
    return srtArr.join('\n');
};

// console.log(splitText('abcdefgh', 4));