
localStorage.setItem('Countries', JSON.stringify({country: 'Ukraine'}));
localStorage.setItem('name', 'Tom');


export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let NewValue;
            try {
                NewValue = JSON.parse(value);
            } catch (event) {
                NewValue = value;
            }
            return {
                ...acc,
                [key]: NewValue,
            };
        }, {});
};

console.log(getLocalStorageData());