'use strict';
    
const createMessenger = () => {
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

// export default createMessenger;

const messenger = createMessenger();
messenger.sendMessage('Bob');

const newMessage1 = 'Good job';
const messenger1 = createMessenger();
messenger1.setMessage(newMessage1.bold());
messenger1.sendMessage('Bob');


const newMessage2 = 'Gromcode';
const messenger2 = createMessenger();
messenger2.setSender(newMessage2.bold());
messenger2.sendMessage('Bob');