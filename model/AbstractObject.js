const uuidv1 = require('uuid/v1');

class AbstractObject {

    constructor(name, surname, phone, email)
    {
        var oid = uuidv1();
        // para no tener problemas con las ruta, remuevo el guion
        this.oid = oid.replace('-','');
    }
}

module.exports = AbstractObject;