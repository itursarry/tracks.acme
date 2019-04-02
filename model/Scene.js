var AbstractObject = require('./AbstractObject.js');

class Scene extends AbstractObject {

    constructor(name, movieStartAt, movieEndAt, songStartAt, songEndAt, lastModifyedBy)
    {
        super();
        this.name = name;
        this.movieStartAt = movieStartAt;
        this.movieEndAt = movieEndAt;
        this.songStartAt = songStartAt;
        this.songEndAt = songEndAt;
        this.lastModifyedBy = lastModifyedBy;
    }
    state(){
        return "Approved"; // esto deberia retornarlo el objeto State.
    }

}


module.exports = Scene;
