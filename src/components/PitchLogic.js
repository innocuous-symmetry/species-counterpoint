export const letterNames = {
    0: 'B',
    1: 'C',
    2: 'C-sharp',
    3: 'D',
    4: 'D-sharp',
    5: 'E',
    6: 'F',
    7: 'F-sharp',
    8: 'G',
    9: 'G-sharp',
    10: 'A',
    11: 'A-sharp',
}


export class Pitch {
    // constructor expects to receive an integer representing a pitch
    constructor(note) {
        this.note = note;
        this.duration = 1;
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



export class Cantus {
    constructor(...notes) {
        this.melody = notes;
    }

    getMelody() {
        return this.melody;
    }

    returnLetters() {
        let output = [];
        for (let pitch of this.melody[0]) {
            let reduced = pitch.getNote() % 12;
            output.push(`${letterNames[reduced]} `);
        }
        return output;
    }
}



export class Sonority {
    // constructor receives an array of Pitch class objects
    constructor([...notes]) {
        this.sonority = [...notes];
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



export class Sequence {
    constructor(...cantii) {
        this.sequence = [...cantii];
    }

    getSequence() {
        return this.sequence;
    }
}



export const cantusFirmus = new Cantus([
    new Pitch(3),   // D
    new Pitch(6),   // F
    new Pitch(5),   // E
    new Pitch(3),   // D
    new Pitch(8),   // G
    new Pitch(6),   // F
    new Pitch(10),  // A
    new Pitch(8),   // G
    new Pitch(6),   // F
    new Pitch(5),   // E
    new Pitch(3)    // D
]);