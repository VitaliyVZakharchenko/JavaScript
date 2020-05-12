export const callbackPromt = {
    message: ' Tell me your nember',
    showPromt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPromt(ms) {
        setTimeout(this.showPromt.bind(this), ms);
    }
}

callBackPromt.showDeferredPromt(1000);