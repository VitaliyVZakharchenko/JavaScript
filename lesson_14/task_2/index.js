'use strict';
    
const createMesseger = () => {
    let sender = 'Gromcode';
    let message = 'Just learn it';
    
    function sendMessage(name) {

        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }
    function setSender(send) {
        sender = send;
    }
    return {
        sendMessage,
        setMessage,
        setSender
    };
};

export default createMesseger;

const messenger = createMesseger();
messenger.sendMessage('Bob');

const newMessage = 'Good job';
messenger.setMessage(newMessage.bold());
messenger.sendMessage('Bob');

const newMessage1 = 'Gromcode';
messenger.setSender(newMessage1.bold());
messenger.sendMessage('Bob');