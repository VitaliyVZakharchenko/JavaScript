export const calc = initValue => {
    let result = initValue;

    const calculator = {
        add(number) {
            result += number;
            return this;
        },
        mult(number) {
            result *= number;
            return this;
        },
        subtract(number) {
            result -= number;
            return this;
        },
        div(number) {
            result /= number;
            return this;
        },
        result() {
            return result;
        }
    };

    return calculator;
};

// const result = calc(5).add(16).mult(8).div(2).subtract(1).result();
// console.log(result);