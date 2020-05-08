'use strict';

let sender = 'Gromcode';
let message = 'Just learn it';


const createMessenger = () => {
        
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

message = 'Good job';
const messenger1 = createMessenger();
messenger1.setMessage(message.bold());
messenger1.sendMessage('Bob');


message = 'Gromcode';
const messenger2 = createMessenger();
messenger2.setSender(message.bold());
messenger2.sendMessage('Bob');