export const callbackPromt = {
    message: ' Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPromt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
}

callbackPromt.showDeferredPromt(1000);