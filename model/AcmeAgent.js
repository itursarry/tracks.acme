var Person = require('./Person.js');

class AcmeAgent extends Person {

    constructor(name, surname, phone, email)
    {
        super(name, surname, phone, email);
    }
}

module.exports = AcmeAgent;