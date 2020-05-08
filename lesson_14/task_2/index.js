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

export default createMessenger;

const messenger = createMessenger();
messenger.sendMessage('Bob');

const newMessage = 'Good job';
const bodNewMessage = newMessage.bold();
const messenger1 = createMessenger();
messenger1.setMessage(bodNewMessage);
// messenger1.sendMessage('Bob');



const newMessage1 = 'Gromcode';
const messenger2 = createMessenger();
messenger2.setSender(newMessage1.bold());
// messenger2.sendMessage('Bob');
