var AbstractObject = require('./AbstractObject.js');

class Song extends AbstractObject{

    constructor(name, autor)
    {
        super();
        this.name = name;
        this.autor = autor;
    }

}