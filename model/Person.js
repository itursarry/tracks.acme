var AbstractObject = require('./AbstractObject.js');

class Person extends AbstractObject {

    constructor(name, surname, phone, email)
    {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
    }
}