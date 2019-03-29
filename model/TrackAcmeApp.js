class TrackAcmeApp{

    constructor()
    {
        this.tracks = [];
        this.persons = [];
        this.songs = [];
    }

    addTracks(tracks){
        this.tracks = this.tracks.concat(persons);
        return this;
    }

    addTrack(track){
        this.tracks.push(track);
        return this;
    }

    addPersons(persons){
        this.persons = this.persons.concat(persons);
        return this;
    }

    addPersons(songs){
        this.songs = this.songs.concat(songs);
        return this;
    }
}


module.exports = TrackAcmeApp;