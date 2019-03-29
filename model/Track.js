var AbstractObject = require('./AbstractObject.js');

class Track extends AbstractObject{

    constructor(movie)
    {
        super();
        this.movie = movie;
    }

}

module.exports = Track;