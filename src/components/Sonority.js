export default class Sonority {
    // constructor receives an array of Pitch class objects
    constructor(notes) {
        this.sonority = notes;
        this.numVoices = null;
        this.consonance = null;
        this.harmonicPull = null;
    }

    getSonority() {
        return this.sonority;
    }

    setConsonance() {
        this.consonance = 1;
    }
}