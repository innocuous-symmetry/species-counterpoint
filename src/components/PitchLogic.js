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

export const harmony = {
    0: 'perfect',
    1: 'dissonance',
    2: 'imperfect',
    3: 'imperfect',
    4: 'imperfect',
    5: 'perfect',
    6: 'dissonance',
    7: 'perfect',
    8: 'imperfect',
    9: 'imperfect',
    10: 'imperfect',
    11: 'dissonance'
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
    constructor(notes) {
        this.melody = notes;
    }

    getMelody() {
        return this.melody;
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



export class Sonority {
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



export class Sequence {
    // constructor receives an array of cantii; those at higher indices will be placed at higher pitch levels
    // Sequence expects that each cantus is the same length
    constructor(cantii) {
        this.sequence = cantii;
        this.sonorities = null;
    }

    getSequence() {
        return this.sequence;
    }

    checkLength() {
        const lens = [];
        for (let cantus of this.sequence) {
            lens.push(cantus.melody.length);
        }
        return lens.reduce((a,b) => (a === b ? true : new Error("Length is not the same")));
    }

    mapLayers() {
        let output = [];
        for (let cantus of this.sequence) {
            output.push(<p>{cantus.returnLetters()}</p>);
        }
        return output;
    }

    getSonorities() {
        // output is an array containing sonorities as raw, inner arrays
        const output = [];
        for (let i = 0; i < this.sequence[0].melody.length; i++) {
            let thing = [];
            for (let each of this.sequence) {
                thing.push(each.melody[i].note);
            }
            output.push(thing);
        }
        console.log(output);
    }

    evaluate() {
        
    }
}

const cantusHelper = (arr) => {
    let mappedArray = [];
    for (let each of arr) {
        mappedArray.push(new Pitch(each));
    }
    return mappedArray;
}

const cantusPitches = cantusHelper([3,6,5,3,8,6,10,8,6,5,3]);
export const cantusFirmus = new Cantus(cantusPitches);

const solutionPitches = cantusHelper([10,10,8,10,12,1,1,12,3,2,3])
export const cantusSolution = new Cantus(solutionPitches);

export const mySequence = new Sequence([cantusFirmus, cantusSolution]);
