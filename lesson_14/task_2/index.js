const createMesseger = () => {
    let sender = 'Gromcode';
    let message = 'Just learn it!';
    function sendMessage(name) {

        console.log(`${name}, ${message} Your ${sender}`);
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