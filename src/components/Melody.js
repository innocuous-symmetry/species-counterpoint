import { letterNames } from "../util/util";

export default class Cantus {
    constructor(notes) {
        this.melody = notes;
        this.head = null;
        this.tail = null;
    }

    getMelody() {
        return this.melody;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    returnLetters() {
        let output = [];
        for (let pitch of this.melody) {
            let reduced = pitch.getNote() % 12;
            output.push(`${letterNames[reduced]} `);
        }
        return output;
    }
}