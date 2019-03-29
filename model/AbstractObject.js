const uuidv1 = require('uuid/v1');

class AbstractObject {

    constructor(name, surname, phone, email)
    {
        this.oid = uuidv1();
    }
}

module.exports = AbstractObject;