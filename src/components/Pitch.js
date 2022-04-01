export default class Pitch {
    // constructor expects to receive an integer representing a pitch
    constructor(note) {
        this.note = note;
        this.duration = 1;
        this.next = null;
    }

    getNote() {
        return this.note;
    }

    getDuration() {
        return this.duration;
    }

    upOctave() {
        this.note += 12;
    }

    downOctave() {
        this.note -= 12;
    }

    transposeByAmount(amount) {
        // a positive int will transpose up, negative int will transpose down
        this.note += amount;
    }
}